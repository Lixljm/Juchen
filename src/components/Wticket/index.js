import React from "react"
import axios from "axios"
import 'swiper/dist/css/swiper.min.css'
import Swiper from "swiper"
import {withRouter} from  "react-router-dom"
import "../../style/yanchuxiangqing/index.scss"
 class ticket extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            detalList: [],
            cityList: {},
            tour_list: [],
            bookList:[],
            show_id:""

    }}

    componentWillMount(){

        axios.get("/juchengapi/Schedule/Schedule/getScheduleInfo?schedular_id="+this.props.match.params.id+"&version=6.0.3&referer=2").then((data) => {
            this.setState({
                detalList: data.data
            })
        });
        axios.get("/juchengapi/Schedule/Schedule/getTour?show_id="+this.props.match.params.id+"&venue_id=2824&version=6.0.3&referer=2").then((data) => {
            this.setState({
                cityList: data.data,
                tour_list: data.data.tour_list,

            })
        }).then(()=>{
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
            });
        });

        axios.get("/jucheng/Search/getShowList?category=36&city_id=36&version=6.0.3&referer=2").then((data) => {
            this.setState({
                bookList: data.data,
            })
        });


    }

    render() {
        console.log(this.props.match.params.id,9999999999999)

        return(
            this.state.detalList.share_data?
            <div className={"Box"}>
                <div className={"xtop"}>
                    <div className={"xt1"}>
                        <div className={"xt-first"}>
                            <span>演出详情</span>
                            <i className={"icon iconfont iconzuojiantou zuo"} ></i>
                            <i className={"icon iconfont iconxiaofangzi you"}></i>
                        </div>
                        <div className={"xt-second"}>
                            <div className={"xt-s1"}>
                                <img src={this.state.detalList.share_data.share_pic} alt=""/>
                            </div>
                            <div className={"xt-s2"}>
                                <div className={"s2-1"}>{this.state.detalList.share_data.share_title}</div>
                                <div className={"s2-2"}>
                                    <div className={"s2-2-2"}></div>
                                </div>
                                <div className={"s2-3"}>
                                    <span className={"s2-3-1"}>{"￥" + this.state.detalList.static_data.price_range}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"xt2"}>
                        <div className={"xt2-1"}>
                            <span className={"xt2-1-1"}>08/24</span>
                            <span className={"xt2-1-2"}>周六</span>
                            <i className={"icon iconfont iconyoujiantou"}></i>
                        </div>
                        <div className={"xt2-2"}>{this.state.detalList.static_data.city.city_name}|{this.state.detalList.static_data.venue.venue_name}</div>
                        <div className={"xt2-3"}></div>
                        <div className={"z-vip"}>
                            <p className={"zz"}></p>
                            <div className={"zx"}>专享6折起</div>
                            <div className={"zg"}>最高省112元</div>
                            <div className={"kt"}>开通99/年</div>
                            <i className={"icon iconfont iconyoujiantou"}></i>
                        </div>
                    </div>
                </div>

                <div className={"show-benefit"}>
                    <div className={"sh-b-1"}>
                        <span>开卡送：</span>
                        <a href="#">
                            <p>开通PLUS卡</p>
                             <span>送￥100尊享V+权益</span>
                            <i className={"icon iconfont iconyoujiantou"}></i>
                        </a>
                    </div>
                    <div className={"sh-line"}></div>

                    <div className={"sh-b-2"}>
                        <span>入场：</span>
                        <p>{this.state.detalList.static_data.tips.desc}</p>
                        <div className={"sh-b-line"}>
                        </div>
                    </div>
                    <div className={"sh-b-3"}>
                        <span>支持：</span>
                        <p>{this.state.detalList.static_data.support.list[0]}</p>
                        <div>|</div>
                        <p>{this.state.detalList.static_data.support.list[1]}</p>
                        <div>|</div>
                        <p>{this.state.detalList.static_data.support.list[2]}</p>
                    </div>
                </div>

                <div className={"tour-cities"}>
                    <div >
                        <div className={"tour-cities-1"}>
                            <span className={"tc-title"}>巡演城市</span>
                            <span className={"tc-city"}>
                            <span className={"c-d-c"} style={{color:"red"}}>{this.state.cityList.show_total}</span>
                            场
                            <i className={"icon iconfont iconyoujiantou"}></i>
                        </span>
                        </div>
                        {/**********************  swiper  ************************/}
                        <div className={"tour_city_list"}>

                            <div className={"swiper-container"}>
                                <div className={"swiper-wrapper"}>
                                    {
                                        this.state.tour_list?this.state.tour_list.map((item, index) => {
                                            return (
                                                <div  key={item.id} className="swiper-slide">
                                                    <div className={"city"}>
                                                        <div className={"cy1"}>
                                                            {item.city_name}
                                                        </div>
                                                        <div className={"cy2"}>{item.show_time}</div>
                                                    </div>
                                                </div>
                                            )
                                        }):null
                                    }
                                </div>
                            </div>
                        </div>
                        {/********************************************************/}
                    </div>
                    <div className={"tour-cities-2"}></div>
                </div>

                <div className={"intro"}>
                    <div className={"j-s"}>演出介绍</div>
                    <div className={"nr"}  dangerouslySetInnerHTML={{__html:this.state.detalList.static_data.show_desc.desc}}></div>
                </div>
                <div className={"tips"}></div>

                <div className={"recommend"}>
                    <div className={"j-s"}>相关推荐</div>
                    {
                        this.state.bookList.list ? this.state.bookList.list.map((v, i) => {

                            return <div className={"commond"} key={i}>
                                <div className={"book"}>
                                    <img src={v.pic} alt=""/>
                                </div>
                                <div className={"bookName"}>
                                    <div className={"timmer"}>
                                        <p>
                                            {this.state.bookList.list[i].show_time_top}
                                            <span>{this.state.bookList.list[i].show_time_bottom}</span>
                                        </p>
                                    </div>
                                    <div className={"name"}>{this.state.bookList.list[i].name}</div>
                                    <div className={"ct-name"}>
                                        {this.state.bookList.list[i].city_name + "|" + this.state.bookList.list[i].venue_name}
                                    </div>
                                    <div
                                        className={"price"}>{"￥" + this.state.bookList.list[i].min_price + "-" + this.state.bookList.list[i].max_price}</div>
                                </div>
                            </div>
                        }) : []
                    }
                </div>
                <div className={"bottom-bar"}></div>
            </div>:null
        )
    }


}
export default withRouter(ticket)
