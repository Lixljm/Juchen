import React from "react"
import {withRouter} from 'react-router-dom'
import "../../../style/order/index.scss"
import "../../../style/holder/index.scss"



class holder extends React.Component{
    render(){
        return(
            <div className={"Holder"}>
                <div className={"top"}>
                    <i className={"icon iconfont iconzuojiantou"} onClick={()=>{this.props.history.go(-1)}}></i>
                    <p>票夹</p>
                    <i className={"icon iconfont icongengduo"}></i>
                </div>
                <div className={"tttt"}></div>
                <div className={"tutu"}>
                    <img src="data:image/png;base64,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" alt=""/>
                    <p>暂无电子票</p>
                </div>
            </div>
        )
    }
}
export default withRouter(holder) ;