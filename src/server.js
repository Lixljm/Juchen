const  express=require("express")
const path =require("path")
const db=require("../module/db")
const help =require("../module/hp")
const phoneCode=require("../module/phoneCode")
const sing =require('../module/http')
const jwt =require("../module/jwt")
const mailer =require("../module/mailer")
const bodyParser=require("body-parser")
const app = express()
const multer  = require('multer')
const fs = require('fs');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {

        const index = file.originalname.lastIndexOf(".");
        const keepName = file.originalname.substr(index).toLowerCase();
        const arr=[".epub",".txt",".mobi",'.awz3']
        if (arr.includes(keepName)) {

            cb(null, file.fieldname + '-' + Date.now())
        }else {
            cb(null, "warning")
        }
    }
})
var upload = multer({ storage: storage })

const update=upload.single('book')
app.use(bodyParser.json())
app.use('/download',express.static(path.join(__dirname,'upload')))
app.post("/token",function (req, res) {
    const token=req.body.token
    db.findOne("admin",{
        token
    },function (err, adminInfo) {
        if (adminInfo) {
            if (adminInfo.token===token){
                res.json(jwt.decode(token))
            }

        }else {
            db.findOne("userList",{
                token
            },function (err,userInfo) {
                if (userInfo){
                    res.json(jwt.decode(token))
                } else{
                    res.json({
                        ok:-1,
                        msg:"账号在别处登录"
                    })
                }
            })
        }

    })

})
app.post("/login",function (req, res) {

    const {adminName,passWord}=req.body
    console.log(passWord)
    db.findOne("admin",
        {
            userName:adminName,
            password:help.md5(passWord)
        },function (err, adminInfo) {
            if (adminInfo) {
                const code=help.md5(adminInfo.level)
                const token=jwt.encode(adminName,code)

                db.updateOne("admin",{
                    userName:adminName,

                },{
                    $set:{
                        token
                    }
                },function (err, updateInfo) {
                    res.json({
                        token,
                        code,
                        ok:1,
                        msg:"登录成功",
                        userName:adminName
                    })
                })
            }else {
                db.findOne("userList",{
                    userName:adminName,
                    password:help.md5(passWord)
                },function (err, userInfo) {
                    if (userInfo) {
                        const code=help.md5(userInfo.level)
                        const token =jwt.encode(adminName,code)

                        db.updateOne("userList",{
                            userName:adminName
                        },{
                            $set:{
                                token
                            }

                        },function (err) {

                            res.json({
                                token,
                                code,
                                ok:1,
                                msg:"登录成功",
                                userName:adminName
                            })
                        })
                    }else {
                        help.json(res,-2,"密码错误")
                    }

                })

            }
        })

})
app.get('/mail', function (req, res) {
    const mail = req.query.mail
    db.findOne('userList',{mail},function (err, userInfo) {
        if (userInfo) {
            res.json({
                ok:-2,
                msg:"该邮箱已存在,请更换邮箱"
            })
        }else {
            db.findOne('codeList', {mail}, function (err, codeInfo) {
                if (codeInfo) {//存在邮箱

                    let t = Date.now() - codeInfo.sendTime
                    if (t > 60 * 1000) {
                        mailer(mail, function (obj) {
                            if (obj.ok === 1) {//发送成功 得到obj 更新数据库 需要用到$set
                                db.updateOne("codeList", {
                                    mail
                                }, {
                                    $set: {
                                        code: obj.code,
                                        sendTime: Date.now()
                                    }
                                },function (err) {
                                    res.json({
                                        ok:1,
                                        msg:"发送成功"
                                    })
                                })
                            } else {//发送失败
                                help.json(res)
                            }
                        })
                    } else {//没有超过1分钟,不在发送验证码
                        res.json({
                            ok: -2,
                            msg: "时间未到",
                            timer: Math.ceil((60 * 1000 - t) / 1000)
                        })
                    }
                } else {//数据库中没有发现改手机号

                    mailer(mail, function (obj) {//发送验证码 返回的数据obj保存在数据库中
                        if (obj.ok === 1) {//obj.ok===1验证码发送成功 并返回code
                            db.insertOne("codeList", {//将得到的code保存到数据库中
                                mail,
                                code: obj.code,
                                sendTime: Date.now()
                            }, function (err) {

                                help.json(res, 1, "发送成功")
                            })
                        } else {//不为1 发送失败
                            help.json(res)
                        }

                    })
                }

            })
        }
    })

})
app.post("/logon",function (req,res) {//post方式接收
    const {adminName,passWord,code}=req.body

    const mail =req.body.mail

    const phoneId=req.body.phoneId | ""

    /**
     * 1.连接数据库codeList，从中查询到phoneId保存的code
     * 2.将得到的code与数据库中code做对比，如果相同则进行下一步
     * 3.查询数据库userList,如果没有数据将用户的phoneId保存到数据库userList中
     */
    db.findOne("userList",{userName:adminName},function (err, userInfo) {
        if (userInfo) {
            res.json({
                ok:-2,
                msg:"该账号已存在，请重新输入账号"
            })
        }else{
            db.findOne("codeList",{
                mail
            },function (err, codeInfo) {
                console.log(codeInfo)
                if (codeInfo) {//有验证码

                    if (codeInfo.code === (code / 1)) {//验证码存在

                        if ((Date.now() - codeInfo.sendTime) < 10 * 60 * 1000) {//发送验证码没有超过10分钟
                            db.insertOne("userList", {
                                userName: adminName,
                                password: help.md5(passWord),
                                phoneId,
                                mail,
                                token: "",
                                lastTime: Date.now(),
                                level: help.md5("lv1")
                            }, function (err, results) {
                                res.json({
                                    ok: 1,
                                    msg: "注册成功",
                                    phoneId
                                })
                            })


                        } else {//发送验证码的时间超过了10分钟，验证码失效
                            res.json({
                                ok: -1,
                                msg: "重新发送验证码"
                            })
                        }
                    }
                } else {//如果返回的codeInfo中没有code说明没有发送验证码
                    res.json({
                        ok: -1,
                        msg: "请发送验证码"
                    })
                }
            })
        }
    })



})
app.get('/userName',function (req, res) {

    const userName=req.query.userName

    db.findOne("userList",{userName},function (err, userInfo) {

        if (userInfo) {
            res.json({
                ok:-2,
                msg:"已被注册"
            })
        }else {
            res.json({
                ok:1,
                msg:"未被注册，可以使用"
            })
        }
    })
})

app.listen(80,function () {
    console.log("success")
})