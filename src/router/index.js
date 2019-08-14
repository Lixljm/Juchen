
import Home from "../view/home"
import Theatre from "../view/theatre"
import Ticket from "../view/ticket"
import User from "../view/user"
import Search from "../view/search"

import Vip from "../view/vip"

import ShowList from "../view/theatre/showList"
import TheatreList from "../view/theatre/theaterList"

import Wticket from "../components/Wticket/index"
import Order from "../view/user/order"
import Holder from "../view/user/holder"
import Reunion from "../view/user/reunion"

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
        },
        children: [{
            path: "/theatre/",
            to: "/theatre/",
            exact: true,
            context: "剧院",
            isShow: false,
            component: TheatreList,

            meta: {
                title: "",
                Keywored: "",
                description: "描述",
            }
        },
            {
                path:"/theatre/showList/:tid",
                to:"/theatre/showList",
                context:"演出信息",
                isShow: false,
                component:ShowList,
            }

        ]
    },
    {
        path:"/ticket",
        to:"/ticket",
        context:"票夹",
        component:Ticket,
        className:"iconfont iconyouhui",
        isok:true,
        isShow: true,

    },
    {
        path:"/Wticket",
        to:"/Wticket",
        context:"卡包",
        component:Ticket,
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
    },
    {
        path:"/order",
        context:"/我的订单",
        component:Order,
    },
    {
        path:"/holder",
        context:"/票夹子",
        component:Holder,
    },
    {
        path:"/reunion",
        context:"欢聚橙卡",
        component:Reunion,
    },
    {
        path:"/Wticket/:id",
        to:"/Wticket",
        component:Wticket,
    }
    ]

