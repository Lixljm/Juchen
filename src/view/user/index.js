import React from "react"
import "../../image/bj.jpg"
import {
    BrowserRouter as Router,
    Route,
    withRouter
} from "react-router-dom"
import "../../style/ticket/index.scss"


 class User extends React.Component{
    render(){
        return(
            <div className={"Box"}>
                <div className={"Btop"}>
                    <i className="icon iconfont iconshezhi1"></i>
                    <div className={"wwwhite"}></div>
                    <div className={"Top"}>
                        <div className={"t1"}>
                            <div className={"t11"}>
                                <div className={"bao"}>
                                    <p className={"p1"}>15203320445</p><br/>
                                    <p className={"p2"}>ID:6792995</p>
                                </div>
                                <div className={"hp"}></div>
                            </div>
                        </div>
                        <div className={"VIP"}>
                            <div className={"V6"}><p>普通会员</p></div>
                        </div>
                        <div className={"t3"}>
                            <a href="#">
                                <p className={"tt"}>0</p>
                                <p className={"td"}>账户余额</p>
                            </a>

                            <a href="#">
                                <p className={"tt"}>4</p>
                                <p className={"td"}>积分</p>
                            </a>

                            <a href="#">
                                <p className={"tt"}>0</p>
                                <p className={"td"}>优惠券</p>
                            </a>

                            <a href="#">
                                <p>立即开通</p>
                                <p className={"td"}>橙PLUS卡</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"Bbottom"}>
                    <div className={"vip"}>
                        <img src={require("../../image/VIP.jpg")} alt=""/>
                    </div>
                    <div className={"dww"}>
                        <ul>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={"icon iconfont icondingdan"}></i>
                                    <p>我的订单</p>
                                </a>
                            </li>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={"icon iconfont iconyouhui"}></i>
                                    <p>我的票夹</p>
                                </a>
                            </li>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={"icon iconfont iconqiapian"}></i>
                                    <p>我的卡包</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"ssyk"}>
                        <ul>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={"icon iconfont iconcontacts"}></i>
                                    <p>实名购票人</p>
                                </a>
                            </li>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={" icon iconfont icondizhi"}></i>
                                    <p>收货地址</p>
                                </a>
                            </li>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={"icon iconfont iconicon-test"}></i>
                                    <p>意见反馈</p>
                                </a>
                            </li>
                            <li>
                                <a href="" className={"icon"}>
                                    <i className={"icon iconfont iconkefu"} style={{fontsize:"40px"}}></i>
                                    <p>客服帮助</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(User)