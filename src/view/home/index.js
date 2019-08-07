import React from "react"
import Banner from "../../common/home/lunbo"
import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"
import "../../style/home.scss"
import getlunbo from "../../store/actionCreato/home";
import TopNav from "../../common/home/Topnav";
import Hotshow from "../../common/home/hotshow"
import List from "../../common/home/List"
import Loding from  "../../common/home/Loading"
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
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
                <Hotshow></Hotshow>
                <List></List>
                <Loding></Loding>
            </div>
        )
    }

    componentDidMount(){
        this.props.getPiclist();
    }
}
export default connect((state)=>({picLIsr:state.home.picLIsr}),(dispatch)=>bindActionCreators(getlunbo,dispatch))(Home)