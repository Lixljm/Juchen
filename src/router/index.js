import Home from "../view/home"
import Theatre from "../view/theatre"
import Ticket from "../view/ticket"
import User from "../view/user"
import Search from "../view/search"
import TheatreList  from "../view/theatre/theaterList"
import ShowList from "../view/theatre/showList"
import Calendar from "../view/calendar"
import Show from "../view/show"
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
        isShow:true,
        className:"iconfont icontheater",
        children:[{
             path: "/theatre/",
             to: "/theatre/",
             exact:true,
             context: "剧院",
             component: TheatreList,
         },
         {
             path:"/theatre/showList/:tid",
             to:"/theatre/showList",
             context:"演出信息",
             component:ShowList,
         }
    
      ]
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
        },
        children:[
            {
                path:"/ticket/:id",
                to:"/ticket/"
            }
        ]
    }, {
    path: "/user",
    to: "/user",
    context: "我的",
    component: User,
    className: "iconfont iconwode",
    isShow:true,
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
    },
},{
    path:"/calendar",
    to:"/calendar",
    context:"演出日历",
    component:Calendar,
},{
    path:"/show",
    to:"/show",
    context:"演出",
    component:Show,
}

]