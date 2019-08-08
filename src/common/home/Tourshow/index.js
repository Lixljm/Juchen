import React from 'react'
import "../../../style/home/tourshow.scss"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import tourAction from '../../../store/actionCreato/home'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
class Tourshow extends React.Component{
    render(){
        return(
            <div className="tour-head ">
                <div className="tour-h1">
                    <h3>巡回演出</h3>
                </div>
                <div className="oneswiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                         this.props.tourshowList.slice(0,6).map((v,i)=>{
                              return(
                                    <div key={i} className="swiper-slide tour-head-c">
                                    <img src={v.pic} alt=""/>
                                    <h3>{v.show_name}</h3>
                                    <p>{v.schedular_num}场巡演</p>
                                    </div>
                                    )
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getTourshowList().then(()=>{
            var swiper = new Swiper('.oneswiper .swiper-container', {
                slidesPerView: 1.5,
                spaceBetween: 30,
                centeredSlides: true,
              
          })
        })
        
    }
}
export default connect((state)=>({tourshowList:state.home.tourshowList}),(dispatch)=>bindActionCreators(tourAction,dispatch))(Tourshow) 