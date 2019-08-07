import React from 'react'
import  Swiper  from "swiper"
import "swiper/dist/css/swiper.min.css"
import "../../../style/Home/hotshow.scss"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import gethotshow from "../../../store/actionCreato/home"
class Hotshow extends React.Component{
     render(){

         return(
             <div className={"lb2"}>
                 <h2 className={"title"}>热门演出</h2>
             <div className={"swiper-container"}>
                 <div className={"swiper-wrapper hostType topok"}>

                 {this.props.hotlists? this.props.hotlists.map((v,i)=>{
                         return (<div key={i} className={"swiper-slide hotlist"}>
                             <img src={v.pic} alt=""/>
                             <p className={"wenben"}>{v.show_name}</p>
                         </div>)
                 }):null
                 }
                 </div>
             </div>
             </div>
         )
     }
     componentDidMount(){
         this.props.getHotshow().then(()=>{
             var youSwiper = new Swiper('.lb2 .swiper-container',{
                 slidesPerView : 3,
                 slidesPerGroup : 3,
                 observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                 observeParents: true,
             })
         })

     }
}
export default connect((state)=>({hotshow:state.home.hotshow,
hotlists:state.home.hotlists}),(dispatch)=>bindActionCreators(gethotshow,dispatch))(Hotshow)
