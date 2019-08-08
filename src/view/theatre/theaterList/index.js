import React from "react"
import theater from "../../../store/actionCreato/theatre/index";
import App from "../../../App";
import {connect} from "react-redux"
import "../../../style/theater/theater.css"
import {
    bindActionCreators
} from "redux"
import {Link} from "react-router-dom"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

 class Theatre extends React.Component{
    constructor(){
        super()

    }
    render(){
        const theatreList=this.props.theatreList.theatre_list || [];
        console.log(theatreList);

            return(
                <div className="theater_wrap">
                    <div className="theater_head">剧院</div>
                    <div className="theater_body">
                        <ul className="theater_ul">
                        {
                            theatreList.map((v,i)=>{
                                return(
                                    <li key={v.id} className="theater_li">
                                        <div className="theater_info_shows">
                                            <div className="theater_info">
                                              <div className="theater_pic_wrap">
                                                  <img className="theater_pic" src={v.pic}/>
                                              </div>
                                                <div className="theater_name_count_wrap">
                                                    <h3>{v.name}</h3>
                                                    <p>{v.count}场在售演出</p>
                                                </div>
                                            </div>
                                            <div className="theater_shows">
                                                <div className="swiper-container">
                                                    <div className="swiper-wrapper">
                                                    {
                                                        v.show_list.map((item)=>{
                                                            return(
                                                                <div className="swiper-slide" key={item.id}>
                                                                    <div className="theater-show-date">
                                                                        <p className="show-data">{item.show_time}</p>
                                                                        <span className="dot"></span>
                                                                    </div>
                                                                    <img src={item.pic} className="show-pic"/>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                        <div className="swiper-slide">

                                                            <div className="theater-show-date">
                                                                <p className="show-data"></p>
                                                                <span className="dot"></span>
                                                            </div>
                                                            <Link to={"/theatre/showList"+"/"+v.id}>
                                                            <div>
                                                            <p className="theater-check-more">点击查看更多</p>
                                                            </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>

                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            )


    }
    componentDidMount(){
        //console.log(this.props)
        this.props.getTheaterList().then(()=>{
            new Swiper('.swiper-container',{
                // direction: 'horizontal', // 水平切换选项
                //loop: true,//循环
                slidesPerView : 3,
                slidesPerGroup : 3,
                observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
            })
        });
        //console.log(2222222,document.querySelectorAll(".swiper-container"))
       //this.props.upShowList()
       // console.log(this.state)
    }
}
export default connect((state)=>({theatreList:state.theatre.theatreList}),(dispatch)=>bindActionCreators(theater,dispatch))(Theatre)
