import React from "react"
import axios from "axios"
import 'swiper/dist/css/swiper.min.css'
import Swiper from "swiper"
// import {logicalExpression} from "@babel/types";

export default class ticket extends React.Component {
    constructor() {
        super();
        this.state = {
            detalList: [],
            cityList: {},
            tour_list: [],
            bookList:[]


    }}

    componentWillMount(){
        axios.get("/juchengapi/Schedule/Schedule/getScheduleInfo?schedular_id=103174&version=6.0.3&referer=2", {
            params: {
                schedular_id: 103174
            }
        }).then((data) => {
            this.setState({
                detalList: data.data
            })
        });
        axios.get("/juchengapi/Schedule/Schedule/getTour?show_id=38383&venue_id=2824&version=6.0.3&referer=2", {
            params: {
                show_id: 38383
            }

        }).then((data) => {
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

        axios.get("/jucheng/Search/getShowList?category=36&city_id=10055&version=6.0.3&referer=2", {
            params: {
                city_id:10055
            }
        }).then((data) => {
            this.setState({
                bookList: data.data,
            })
        });


    }

    render() {
        console.log(this.state.bookList.list,9999999999999)
        return (

            this.state.detalList.share_data ?
                <div className={"details"}>
                    <header>
                        <div className={"bj"}>
                            <div className={"One"}>
                                <span className={"icon iconfont iconzuojiantou"}></span>
                                <p>演出详情</p>
                                <i className={"icon iconfont iconxiaofangzi"}></i>
                            </div>
                            <div className={"book"}>
                                <img src={this.state.detalList.share_data.share_pic} alt=""/>
                            </div>
                            <div className={"bookName"}>
                                <div className={"name"}>{this.state.detalList.share_data.share_title}</div>
                                <div className={"white"}></div>
                                <div className={"price"}>{"￥" + this.state.detalList.static_data.price_range}</div>
                            </div>
                        </div>
                    </header>


                    <div className={"Data"}>
                        <div className={"Day"}>
                            <div className={"time"}>
                                <div className={"time_child1"}>{this.state.detalList.item_list[0].project_time}</div>
                                <div
                                    className={"time_child2"}>{this.state.detalList.static_data.city.city_name}|{this.state.detalList.static_data.venue.venue_name}</div>
                            </div>
                            <div className={"position"}>
                                <div className={"circular"}>
                                    <div className={"icon iconfont icondingwei"}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"discount"}>
                            <p className={"zz"}><img src="../../image/zvip.jpg" alt=""/></p>
                            <div className={"zx"}>专享6折起</div>
                            <div className={"zg"}>最高省112元</div>
                            <div className={"kt"}>开通99/年</div>
                            <i className={"icon iconfont iconyoujiantou"}></i>
                        </div>
                    </div>
                    <div className={"middle"}>
                        <div className={"support"}>
                            <span className={"sp3"}>开卡送</span>
                            <span className={"sp3"}>：</span>
                            <span className={"sp4"}>

                        </span>
                            <p>开通PLUS卡</p>
                            <a href="#">送￥100尊享V+权益</a>
                            <i className={"icon iconfont iconyoujiantou"}></i>
                        </div>
                        <div className={"tips"}>
                            <span className={"sp1"}>入    场</span>
                            <span className={"sp1"}>：</span>
                            <div className={"sp2"}>{this.state.detalList.static_data.tips.desc}</div>
                        </div>
                        <div className={"ttt"}>
                            <span className={"sp3"}>支    持</span>
                            <span className={"sp3"}>：</span>
                            <span className={"sp4"}>
                            {this.state.detalList.static_data.support.list[0]}
                                <span>|</span>
                                {this.state.detalList.static_data.support.list[1]}
                                <span>|</span>
                                {this.state.detalList.static_data.support.list[2]}
                        </span>
                        </div>

                    </div>
                    <div className={"Tour"}>
                        <div className={"tour_city"}>
                            <p>巡演城市</p>
                            <span>
                                <span style={{color: "red"}}>{this.state.cityList.show_total}</span>场
                            </span>
                            <i className={"icon iconfont iconyoujiantou"}></i>
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
                    <div className={"wwhite"}></div>
                    <div className={"introduce"}>
                        <div className={"subtitle"}>演出介绍</div>
                        <div className={"Scontent"}>{this.state.detalList.static_data.show_intro.desc}</div>
                    </div>
                    <div className={"recommend"}>
                        <div className={"word"}>相关推荐</div>

                                    {
                                        this.state.bookList? this.state.bookList.list.map((v,i)=>{
                                    return <div className={"commond"} key={i}>
                                                <div><div>
                                          <div className={"book"}>
                                              <img src={v.pic} alt=""/>
                                          </div>
                                          <div className={"bookName"}>
                                              <div className={"name"}>{this.state.detalList.share_data.share_title}</div>
                                              <div className={"white"}></div>
                                              <div className={"price"}>{"￥" + this.state.detalList.static_data.price_range}</div>
                                          </div>
                                      </div>
                                                </div>
                                    </div>
                                  }):[]
                                    }

                            </div>




                </div> : null
        )

    }


}
