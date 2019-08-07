import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import memberShip from "../../../store/actionCreato/home"
import '../../../style/home/membership.scss'
class Membership extends React.Component{
    render(){
        return(
            <div className="vip-t">
                <div className="vip-block">
                    <span className="vip-block-left"><img src="https://image.juooo.com/group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png" alt=""/> </span>
                    <span className="vip-block-center">vip+会员尊享权益</span>
                    <span className="vip-block-right">99元/年 <i><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="/></i></span>
                </div>
                <div className="vip-left">
                    <div className="vip-left-t">
                        <h3>专享折扣 <i> <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="/></i> </h3>
                    </div>
                    <ul>
                        {
                           this.props.membershipList.discountList?this.props.membershipList.discountList.map((v,i)=>{
                               return <li key={i}>
                                        <img src={v.pic} alt=""/>
                                        <p>{v.min_discount} <i>折</i></p>
                                     </li>
                           }):[]
                        }
                    </ul>
                </div>
                <div className="vip-right">
                <div className="vip-right-t">
                        <h3>免费观影 <i><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="/></i> </h3>
                </div>
                <ul>
                    {
                        this.props.membershipList.watchList?this.props.membershipList.watchList.map((v,i)=>{
                                return <li key={i}>
                                    <img src={v.pic} alt=""></img>
                                    <p>￥0<i>￥100</i> </p>
                                </li>
                        }):[]
                    }
                </ul>
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        this.props.getMembership()
    }
}

export default connect((state)=>({membershipList:state.home.membershipList}),(dispatch)=>bindActionCreators(memberShip,dispatch))(Membership)