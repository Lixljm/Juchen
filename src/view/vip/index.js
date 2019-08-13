import React from "react"
import "../../style/vip/vip.scss"
import "swiper/dist/css/swiper.min.css"
import getviplist  from "../../store/actionCreato/vip"
import Chouti from "../../common/home/chouti"
import {
    Link,
    withRouter,
} from "react-router-dom"
import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"
 class Vip extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index:0,
            list:[],
        }

    }
     getlist(i,id){
         this.setState({
          index:i,
     });
     this.props.getvipType(id);
     }
     render(){
        return(
            <div>
                <div className={"vip"}>
                    <div className={"didi"}>
                  <div className={"topnav"}>
                      <div>
                          <h2 style={{marginBottom:"20px"}} className={"biaoti"}>
                              <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)} style={{zIndex:"999999999999999"}}></span>
                              <span>专项折扣</span>
                              <span className={"iconfont iconpoint"} style={{marginRight:"10px"}}></span>
                          </h2>
                          <div className={"xiangq"}>
                              {
                                  this.props.viplist.map((v,i)=>{
                                      return <span key={i} style={{color:i===this.state.index?"red":"black",borderBottom:i===this.state.index?"2px solid red":""}} onClick={this.getlist.bind(this,i,v.id)}>{v.name}</span>
                                  })
                              }
                          </div>
                          <div className={"shaixuan"}>
                              <Chouti></Chouti>
                          </div>
                      </div>
                  </div>
                  </div>
                    {
                        this.state.list? this.state.list.map((v,i)=>(
                            <div>
                                <div className={"xiangl"}>
                            <img src={v.pic} alt=""/>
                            <div className={"xianqi"}>
                                <span>{v.date}{v.week}</span>
                                <h2>{v.schedular_name}</h2>
                                <span>{v.city_name}|{v.venue_name}</span>
                                <span>￥{v.min_price}</span>
                            </div>
                        </div>
                                <div className={"zhekou"}>{v.activity_name}</div>
                            </div>)):null
                    }

                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.vipType!==this.props.vipType){
            console.log(nextProps.vipType)
            this.state.list=nextProps.vipType
        }
    }
    componentDidMount(){
         this.props.getvipList();
         this.props.getvipType();
    }
}
export  default withRouter(connect((state)=>({viplist:state.vip.viplist,
vipType:state.vip.vipType}),(dispatch)=>bindActionCreators(getviplist,dispatch))(Vip))
