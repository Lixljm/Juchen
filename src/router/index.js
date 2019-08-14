import Home from "../view/home"
import Theatre from "../view/theatre"
import Ticket from "../view/ticket"
import User from "../view/user"
import Search from "../view/search"
import Vip from "../view/vip"
export default [
    {
        path: "/",
        to: "/",
        exact: true,
        context: "首页",
        component: Home,
        className:"iconfont iconshouye",
        isShow:true,
        isok:true,
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
        isShow:true,
        isok:true,
        meta: {
            title: "",
            Keywored: "",
            description: "描述",
        }
    },
    {
        path:"/ticket",
        to:"/ticket",
        context:"票夹",
        component:Ticket,
        className:"iconfont iconyouhui",
        isok:true,
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
    isShow:true,
        isok:true,
    meta: {
        title: "",
        Keywored: "",
        description: "描述",
    }
},{
    path: "/search",
    to: "/search",
    context: "搜索",
    component: Search,
    className: "iconfont iconwode",
    meta: {
        title: "",
        Keywored: "",
        description: "描述",
    }
},{
    path:"/vip",
    to:"/vip",
    context:"vip",
    component:Vip,
    }
]