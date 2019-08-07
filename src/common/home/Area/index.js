import React from "react";
import '../../../style/home/area.scss'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionArea from '../../../store/actionCreato/home'

 class Area extends React.Component{
    render(){
        return(
            
            this.props.operation_list[0]?<div className="plus">
                
               <div className="plus-t">
                    <div className="plus-t1">
                        <h3>{this.props.operation_list[0].name}</h3>
                        <img src={this.props.operation_list[0].pic} alt=""></img>
                        <p dangerouslySetInnerHTML={{__html:this.props.operation_list[0].describe}}></p>
                    </div>
                    <div className="plus-t1">
                        <h3>{this.props.operation_list[1].name}</h3>
                        <img src={this.props.operation_list[1].pic} alt=""></img>
                        <p dangerouslySetInnerHTML={{__html:this.props.operation_list[1].describe}}></p>
                    </div>
                </div>
                <div className="plus-b">
                    <div>
                        <h3>{this.props.operation_list[2].name}</h3>
                        <p dangerouslySetInnerHTML={{__html:this.props.operation_list[2].describe}}></p>
                        <img src={this.props.operation_list[2].pic} alt=""></img>
                    </div>
                    <div>
                        <h3>{this.props.operation_list[3].name}</h3>
                        <p dangerouslySetInnerHTML={{__html:this.props.operation_list[3].describe}}></p>
                        <img src={this.props.operation_list[3].pic } alt=""></img>
                    </div>
                    <div>
                        <h3>{this.props.operation_list[4].name}</h3>
                        <p dangerouslySetInnerHTML={{__html:this.props.operation_list[4].describe}}></p>
                        <img src={this.props.operation_list[4].pic} alt=""></img>
                    </div>
                </div>
            </div>:null
        
        
        )
    }
    componentDidMount(){
        this.props.getOperationList()
    }
}
export default connect((state)=>({operation_list:state.home.operation_list}),(dispatch)=>bindActionCreators(actionArea,dispatch))(Area)