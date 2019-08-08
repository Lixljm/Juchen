import Home from "../view/home"
import Theatre from "../view/theatre"
import Ticket from "../view/ticket"
import User from "../view/user"
import Search from "../view/search"
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
        context:"卡包",
        component:Ticket,
        className:"iconfont iconyouhui",
        isShow:true,
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
    meta: {
        title: "",
        Keywored: "",
        description: "描述",
    }
}

]