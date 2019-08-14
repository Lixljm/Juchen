import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {withRouter} from 'react-router-dom'
import searchCreate from "../../store/actionCreato/search"

import "../../style/search/index.scss"
 class Search extends React.Component{
     constructor(){
         super();
         this.state={
             valuestate:"",
             searchScollList:[]
         }
     }
    changeSearch(event){
       if(event.keyCode === 13 || event.keyCode === 32){
        this.props.getSearchCollList(this.refs.serchname.value);
        this.setState({
            searchScollList:this.props.searchScollList
        })
       }
       
    }
    headerChange(e){
        this.setState({
            valuestate:e.target.value
        })
    }
    render(){
        return(
            <div>
                <div className="headrs">
                   <div className="headers_l" style={{width:"301.98px"}}><span className="span1"></span><input onKeyDown={this.changeSearch.bind(this)} onChange={e=>this.headerChange(e)} ref={"serchname"} value={this.state.valuestate}  type="text" placeholder="搜索热门演出" /><span className="span2"></span></div> 
                    <span className="headers_r" onClick={()=>this.props.history.go(-1)}>取消</span>
                </div>
                {
                    this.state.searchScollList.length>0?<div className="serch_list">
                        <ul>
                            {
                        this.props.searchScollList.map((item,index)=>{
                                return <li key={item.schedular_id}>
                                            <div className="search_list_left"><img alt="" src={item.pic}/> </div>
                                            <div className="search_list_right">
                                                <p className="search_right_on"><strong>{item.show_time_top}</strong> </p>
                                                <h3 className="search_right_tw" dangerouslySetInnerHTML={{__html:item.name}}></h3>
                                                <p className="search_right_th">{item.city_name}|{item.venue_name}</p>
                                                <p className="search_right_fo"> <span>￥{item.min_price}</span> 起  </p>
                                            </div>
                                        </li> 
                           
                               
                                }) 
                            }
                        </ul>
                    </div>:<div className="content">
                    <h3>热门搜索</h3>
                    <ul className="ulname">
                        {
                            this.props.searchList.map((v,i)=>{
                                return(
                                    <li key={i} onClick={()=>this.setState({valuestate:v})}>{v}</li>
                                )
                            })
                        }
                    </ul>
                  
                </div>
                }
                
            </div>
        )
    }
    componentDidMount(){
        this.props.getListSearch()
    }
    
}
export default withRouter(connect((state)=>({searchList:state.search.searchList,searchScollList:state.search.searchScollList}),(dispatch)=>bindActionCreators(searchCreate,dispatch))(Search)) 