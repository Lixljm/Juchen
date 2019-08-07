import Home from "../view/home"
import Theatre from "../view/theatre"
import Ticket from "../view/ticket"
import User from "../view/user"
export default [
    {
        path: "/",
        to: "/",
        exact: true,
        context: "首页",
        component: Home,
        className:"iconfont iconshouye",
        isFile:true,
        meta: {
            title: "",
            Keywored: "",
            description: "描述",
        }
    },
    {
        path: "/theatre",
        to: "/theatre",
        context: "剧院",
        component: Theatre,
        className:"iconfont icontheater",
        isFile:true,
        meta: {
            title: "",
            Keywored: "",
            description: "描述",
        }
    },
    {
        path:"/ticket",
        to:"/ticket",
        context:"卡包",
        component:Ticket,
        isFile:true,
        className:"iconfont iconyouhui",
        meta:{
            title:"",
            Keywored:"",
            description:"描述",
        }
    }, {
    path: "/user",
    to: "/user",
    context: "我的",
    component: User,
    className: "iconfont iconwode",
        isFile:true,
    meta: {
        title: "",
        Keywored: "",
        description: "描述",
    }
}
]