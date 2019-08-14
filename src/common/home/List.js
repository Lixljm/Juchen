import React from "react";
import   {
    connect,
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import {
    withRouter
} from "react-router-dom"
import Swiper from "swiper"
import  "swiper/dist/css/swiper.min.css"
import "../../style/home/list.scss"
import getList from "../../store/actionCreato/home"
class List extends React.Component{
     render(){
         console.log(2222,this.props.listtype)
         return(
             <div>
                 {
                    this.props.listtype.map((v,i)=>{
                         return <div id={"list_wrap"} key={i}>
                             <h2 className={"biaoti"}>{v.title}</h2>
                             {v.list?v.list.slice(0,1).map((v, i) => {
                                return <div className={"list-top"} style={{background:"#3f3c40"}} key={i} onClick={()=>this.props.history.push("/Wticket/"+v.sche_id)}>
                                     <div className={"pic"}>
                                         <img src={v.pic} alt=""/>
                                     </div>
                                     <div className={"xinxi"}>
                                         <span style={{marginRight:"20px"}}>{v.date}{v.week}</span>
                                         <h3 className={"xin"}>{v.schedular_name}</h3>
                                         <span>{v.city_name}  |  {v.venue_name}</span>
                                     </div>

                                 </div>
                             }):null
                             }
                             <div className={"lb3"}>
                                 <div className={"swiper-container"}>
                                 <div className={"swiper-wrapper buttom-list"}>
                                     {
                                         v.list?v.list.slice(1).map((v,i)=>{
                                             return  <div className={"swiper-slide liebiao"} key={i} onClick={()=>this.props.history.push("/Wticket/"+v.sche_id)}>
                                                 <img src={v.pic} alt=""/>
                                                 <h4 className={"xiangqing"}>{v.schedular_name}</h4>
                                                 <span style={{color:"red",fontSize:"14px"}}>￥价钱:<i>{v.low_price}</i></span>
                                             </div>
                                         }):null

                                     }
                                 </div>
                                 </div>
                             </div>
                         </div>
                     })
                 }
             </div>
         )
     }
     componentDidMount(){
         this.props.getList().then(()=>{
             var youSwiper = new Swiper('.lb3 .swiper-container',{
                 slidesPerView : 3,
                 slidesPerGroup : 3,
                 observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                 observeParents: true,
             })
         })
     }
}
export default withRouter(connect((state)=>({listtype:state.home.listtype}),(dispatch)=>bindActionCreators(getList,dispatch))(List))