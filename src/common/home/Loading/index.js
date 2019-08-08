import React from "react"
import "../../../style/home/loding.scss"
import getLoding from "../../../store/actionCreato/home"
import {
    connect
}  from "react-redux"
import {
    bindActionCreators
} from "redux"

class Loding extends React.Component{
    constructor(){
        super();
        this.state={
            index :1
        }



    }
    render(){
        return(
            <div>
                {
                    this.props.loginglist.recommend_show_list?this.props.loginglist.recommend_show_list.map((v,i)=>{
                        return <div className={"loding"} key={i} ref="sss">
                            <img src={v.schePic} alt=""/>
                            <div className={"lodingList"}>
                                <span style={{fontWeight:900}}>{v.show_time}<i>{v.week}</i></span>
                                <h4>{v.show_name}</h4>
                                <span>{v.c_name}|{v.v_name}</span>
                                <span style={{color:"red"}}>￥{v.low_price}起</span>
                            </div>
                        </div>
                    }):null
                }

            </div>
        )
    }
    componentDidMount(){
        this.props.getLoging();
       
    }

}
export default connect((state)=>({loginglist:state.home.loginglist}),(dispatch)=>bindActionCreators(getLoding,dispatch))(Loding)