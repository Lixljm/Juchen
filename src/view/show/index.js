import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import showAction from "../../store/actionCreato/show"
import "../../style/show/index.scss"

class Show extends React.Component{
    constructor(){
        super();
        this.state = {
            index:0,
            pageIndex:0,
            flag:true
        
        }
    }
    changeShow(index,category){
        this.setState({
            index:index
        })
        this.props.getShowContent(category)
    }
    render(){
        console.log(this.state.flag)
        return(
            <div className="show_da" >
                <div className="header_top">
                   <i className="iconfont iconzuojiantou" onClick={()=>this.props.history.go(-1)}></i> <span>演出</span> <i>...</i>
                </div>
                <div className="nav_n">
                    <ul>
                    {
                        this.props.showsList.map((v,i)=>{
                            return(
                                <li style={{borderBottom:this.state.index === i?'2px solid #ff6743':null }} key={v.category_id} onClick={this.changeShow.bind(this,i,v.category_id)}>{v.name}</li>
                            )
                        })
                    }
                    <div className="nav_n_r">全国 <i className="iconfont iconlocation"></i></div>
                </ul>
                </div>
                <div className="show_conten">
                    <ul>
                    {
                        this.props.showsContenList.map((v,i)=>{
                            return(
                                <li key={v.schedular_id}>
                                    <div className="show_conten_left"><img alt="加载中" src={v.pic}/> </div>
                                    <div className="show_conten_right">
                                        <p className="show_conten_right_a"><strong>{v.show_time_top}</strong>{v.show_time_bottom} </p>
                                        <h3 className="show_conten_right_b" >{v.name}</h3>
                                        <p className="show_conten_right_c">{v.city_name}|{v.venue_name}</p>
                                        <p className="show_conten_right_d"><strong>￥{v.min_price}</strong> 起</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div  ref="wrapper"></div>
            </div>
            
        )
    }
    componentDidMount(){
        this.props.getShow();
        this.props.getShowContent();
       


        
    }

}

export default withRouter(connect((state)=>({showsList:state.show.showsList,showsContenList:state.show.showsContenList}),(dispatch)=>bindActionCreators(showAction,dispatch))(Show)) 