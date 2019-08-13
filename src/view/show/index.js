import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import showAction from "../../store/actionCreato/show"
import "../../style/show/index.scss"

class Show extends React.Component{
    render(){
        console.log(this.props.showsList,11111111111111111);
        return(
            <div className={"headerr"}>
                <div className={"data"}>
                    <div className={"section"}>
                        <i className={"icon iconfont iconzuojiantou"}></i>
                        <span >演出</span>
                        <i className={"icon iconfont icongengduo"}></i>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getShow()
    }
}
export default connect((state)=>({showsList:state.show.showsList}),(dispatch)=>bindActionCreators(showAction,dispatch))(Show);
