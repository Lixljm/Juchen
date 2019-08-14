import  React from "react"
import  Swiper from "swiper";
import "swiper/dist/css/swiper.min.css"
import getlunbo from "../../../store/actionCreato/home"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
}  from "redux"

export default class Lunbo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slideList:[]
        }
    }
    render(){
        return(
            <div className={"lb1"}>
             <div className={"swiper-container"} style={{overflow:"hidden",width:'414px',height:"216px"}}>
                 <div className={"swiper-wrapper"}>
                     {  this.state.slideList?
                         this.state.slideList.map((v, i) => {
                                 return (
                                     <div className={"swiper-slide"} key={i}>
                                         <img style={{width: '100%', height: "100%"}} src={v.image_url} alt=""/>
                                     </div>
                                 )
                             }):[]
                     }
                 </div>
              <div className={"swiper-pagination"}></div>
             </div>
            </div>
         )
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.a!== this.props.a){
            this.setState({
                slideList:nextProps.a.slide_list
            });
            var mySwiper = new Swiper(".lb1 .swiper-container",{
                loop: true,
                speed: 500,
                observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, // 修改swiper父元素时，自动初始化swiper
                autoplay: {
                    delay: 3000, //3秒切换一次
                    disableOnInteraction: false,
                },
                pagination:{
                    el:".swiper-pagination",
                }
            })
        }


    }

}
