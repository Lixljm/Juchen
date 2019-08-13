import React from "react";
import {
    Route,
    Link
} from "react-router-dom"
import theater from "../../../store/actionCreato/theatre/index";
import {connect} from "react-redux"
import {
    bindActionCreators
} from "redux"
import "../../../style/theater/showList.css"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
class ShowList extends React.Component{
    constructor(){
        super()
        this.state={
            tid:0,
            page:1,

        }
    }
    render(){
        console.log(this.state.tid)
        //console.log(this.props.showCategoryList,888888);
        const showList=this.props.showsList ||[]
        const showCategoryList=this.props.showCategoryList || []
       //const tid=this.props.location.state.tid
        //console.log(this.props,888888);
        return(
            <div className="f2">
             <div className="search-top border-bt ">
                 <div className="search-nav theater-search-nav swiper-container" >
                     <div className="search_nav_wrap js-search-nav swiper-wrapper">
                         <div className="search_nav_item active swiper-slide "onClick={()=>{this.props.getShowList(this.state.tid)}}>全部</div>
                         {
                             showCategoryList.map((item)=>{
                                 return(
                                     <div  className="search_nav_item swiper-slide" key={item.category_id} onClick={()=>{this.props.getShowList(this.state.tid,item.category_id,1)}}>{item.name}</div>
                                 )
                             })
                         }
                     </div>
                 </div>
             </div>
                <div className="content-wrap">
                    <div className="js-pre-hint"></div>
                    <div className="show-wrap">
                        {
                            showList.map((i)=>{
                                return(
                                    <Link className="show-items" key={i.id} to={"/ticket/"+i.id}>
                                        <div className="img-box">
                                            <img src={"https://image.juooo.com"+i.pic}/>
                                            <span className="logo_i ju_cheng"></span>
                                        </div>
                                        <div className="detail-box">
                                            <p className="title">{i.schedular_name}</p>
                                            <p className="time">{i.show_time}</p>
                                            <p className="place">{i.name}</p>
                                            <p className="ft0 price">
                                                <span className="fs24 mr8">¥</span>
                                                <span className="fs32">{i.min_price}</span>
                                                <span className="fs24 mr8">起</span>
                                            </p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getShowList(this.props.match.params.tid,0,this.state.page)
        //console.log(this.props.location.state,888888)

       // console.log(this.state.tid)
        this.setState({
            tid:this.props.match.params.tid/1
        })

       console.log(this.props,666)
       this.props.getShowCategoryList().then(()=>{
           new Swiper('.swiper-container',{
               // direction: 'horizontal', // 水平切换选项
               //loop: true,//循环
               slidesPerView : 5,
               slidesPerGroup : 7,
               observer: true, // 修改swiper自己或子元素时，自动初始化swiper
               observeParents: true,
           })
       })
    }
}
export default connect((state)=>({showsList:state.theatre.showsList,showCategoryList:state.theatre.showCategoryList}),(dispatch)=>bindActionCreators(theater,dispatch))(ShowList)
