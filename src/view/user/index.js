import React from "react"
import "../../image/bj.jpg"
import 'antd/dist/antd.css';
import {
    Link,
    BrowserRouter as Router,
    Route,
    withRouter
} from "react-router-dom"
import "../../style/ticket/index.scss"
import Myphone from "../../components/kefuhelp"


 class User extends React.Component{
    render(){
        return(
            <div className={"box"}>
                <div className={"header"}>
                    <i className={"icon iconfont iconshezhi1"}></i>
                    <div className={"bigger"}>
                        <div className={"upper"}>
                            <div className={"photo"}></div>
                            <span className={"sp1"}>橙子</span>
                            <span className={"sp2"}>ID：6792995</span>
                        </div>
                        <div className={"middle"}>
                            <p>普通会员</p>
                        </div>
                        <div className={"lower"}>
                            <Link >
                                <p className={"ps"}>0</p>
                                <p className={"px"}>账户余额</p>
                            </Link>
                            <Link >
                                <p className={"ps"}>18</p>
                                <p className={"px"}>积分</p>
                            </Link>
                            <Link>
                                <p className={"ps"}>0</p>
                                <p className={"px"}>优惠券</p>
                            </Link>
                            <Link>
                                <p className={"pss"}>立即开通</p>
                                <p className={"px"}>橙PLUS卡</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <a href="https://m.juooo.com/shop/vip/buy" className={"mine-vip"}>
                </a>
                <div className={"menu"}>
                    <ul className={"first"}>
                        <li>
                            <Link  onClick={()=>{this.props.history.push("/Order")}}>
                                <i className={"icon iconfont icondingdan"}></i>
                                <p>我的订单</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={"icon"} onClick={()=>{this.props.history.push("/Holder")}}>
                                <i className={"icon iconfont iconyouhui"}></i>
                                <p>我的票夹</p>
                            </Link>
                        </li>
                        <li>
                            <Link  className={"icon"} onClick={()=>{this.props.history.push("/Reunion")}}>
                                <i className={"icon iconfont iconqiapian"}></i>
                                <p>我的卡包</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className={"first"}>
                        <li>
                            <Link  className={"icon"}>
                                <i className={"icon iconfont iconcontacts"}></i>
                                <p>实名购票人</p>
                            </Link>
                        </li>
                        <li>
                            <Link  className={"icon"}>
                                <i className={" icon iconfont icondizhi"}></i>
                                <p>收货地址</p>
                            </Link>
                        </li>
                        <li>
                            <Link  className={"icon"}>
                                <i className={"icon iconfont iconicon-test"}></i>
                                <p>意见反馈</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={"icon"}>
                                <i className={"icon iconfont iconkefu"} style={{fontsize:"40px"}}></i>
                            </Link>
                            <Myphone></Myphone>
                        </li>
                    </ul>
                </div>
                <div className={"surplus"}></div>
            </div>
        )
    }
}
export default withRouter(User)