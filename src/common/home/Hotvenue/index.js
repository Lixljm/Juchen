import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import hotvenueActive from '../../../store/actionCreato/home'
import "../../../style/home/hotvenue.scss"
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
class Hotvenue extends React.Component{
    render(){
        return(
            <div className="hotvenue">
                <div className="hotvenue-t">
                    <h3>热门场馆</h3>
                    <i><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="/></i>
                </div>
                <div className="ztxswiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                         {
                    this.props.hotvenueList.map((v,i)=>{
                        return (
                            <div className="swiper-slide" key={i}>
                             <div className="hotcenue-c" >
                                 
                                <div className="hotcenue-conten">
                                <div className="hotcenue-conten-left"> <img alt="" src={v.pic}/> </div>
                                <div className="hotcenue-conten-c">
                                    <h3>{v.name}</h3>
                                    <p>{v.count}在售演出</p>
                                </div>
                                <div className="hotcenue-conten-right"><a href="javascript:;">...</a></div> 
                                </div>
                                <div className="hotecenue-date">
                                    <p>
                                        {v.showList[0].show_time}
                                        <span></span>
                                    </p>
                                    <p>
                                        {v.showList[1].show_time}
                                        <span></span>
                                    </p>
                                    
                                </div>
                                <ul>
                                    <li><img alt="" src={v.showList[0].pic}/> </li>
                                    <li><img alt="" src={v.showList[1].pic}/></li>
                                </ul>
                            </div>
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
        this.props.getHotvenue().then(()=>{
            var mySwiper = new Swiper('.ztxswiper .swiper-container', {
                slidesPerView: 1.2,
                spaceBetween: 10,
              });
        })
    }
}

export default connect((state)=>({hotvenueList:state.home.hotvenueList}),(dispatch)=>bindActionCreators(hotvenueActive,dispatch))(Hotvenue)
