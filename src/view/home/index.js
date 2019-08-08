import React from "react"
import "../../style/home/index.scss"
import { 
    withRouter
} from 'react-router-dom'
import Area from "../../common/home/Area"
import Tourshow from "../../common/home/Tourshow"
import Membership from "../../common/home/Membership"
import Hotvenue from "../../common/home/Hotvenue"
import Banner from "../../common/home/lunbo"
import "../../style/home.scss"
import getlunbo from "../../store/actionCreato/home"
import TopNav from "../../common/home/Topnav"
import Hotshow from "../../common/home/hotshow"
import List from "../../common/home/List"
import Loding from  "../../common/home/Loading"
import{
 bindActionCreators
} from "redux"
import{
  connect
}from "react-redux"
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flage : false
        }
    }
    render(){
        return(
            <div>
            <div className="head" style={{background : this.state.flage?'#fff':'rgba(0 0 0 0.1)'}} ref={"homConatiner"}>
               <div className={"head-left"}><strong></strong> <span>全国</span></div> 
               <div onClick={()=> this.props.history.push("/search")} className="head-center">搜索热门演出</div>
                <span className={"head-right"}><img style={{width:"30px",height:"30px"}} alt="" src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png"></img></span>
            </div>
            <Banner a={this.props.picLIsr}></Banner>
            <TopNav b={this.props.picLIsr}></TopNav>
            <div  id={"youxian"}>
                    <div  className={"goupiao"}>
                        <div className={"top"}>
                             <span style={{fontSize:'16px'}}>优先购票<span style={{fontSize:'9px',paddingLeft:"none"}}>VIP+会员尊享权益</span></span>
                            <span>开通99元/年  ></span>
                        </div>
                        <div className={"demo"}>
                            <img src="https://image.juooo.com/group1/M00/03/41/rAoKNVzde4GAb_DlAABnSDwWI0w744.jpg" alt=""/>
                            <div className={"xiang"}>
                                <h4 style={{fontSize:"16px",paddingTop:"20px"}}>法语音乐剧《摇滚与黑》-北京站</h4>
                                <span style={{fontSize:"13px",padding:"10px"}}>北京  |  世纪剧院</span>
                                <span style={{fontSize:"14px",padding:"10px",color:"orange"}}>08/05  10:30 <i style={{margin:"10px"}}>开始</i></span>
                                <div className={"kaishou"}>开售提醒</div>
                            </div>
                        </div>
                    </div>
                </div>
            <Area></Area>
            <Hotshow></Hotshow>
            <Tourshow></Tourshow>
            <Membership></Membership>
            <List></List>
            <Hotvenue></Hotvenue>
            <Loding></Loding>
            </div>
        )
    }
    componentDidMount(){
        this.props.getPiclist();
       window.addEventListener('scroll', ()=>{
            if(window.scrollY>0){
            this.setState({
                flage:true 
            })
        }else{
            this.setState({
                flage:false 
            })
        }
       });	
      }
}
export default withRouter(connect((state)=>({picLIsr:state.home.picLIsr}),(dispatch)=>bindActionCreators(getlunbo,dispatch))(Home)) 

