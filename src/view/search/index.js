import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import searchCreate from "../../store/actionCreato/search"
import "../../style/search/index.scss"
 class Search extends React.Component{
    render(){
        return(
            <div>
                <div className="headrs">
                   <div className="headers-l"><span>@</span><input  type="text" placeholder="搜索热门演出" /><span>x</span></div> 
                    <span>取消</span>
                </div>
                <div className="content">
                    <h3>热门搜索</h3>
                    <ul className="ulname">
                        {
                            this.props.searchList.map((v,i)=>{
                                return(
                                    <li key={i}>{v}</li>
                                )
                            })
                        }
                    </ul>
                  
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getListSearch()
    }
    
}
export default connect((state)=>({searchList:state.search.searchList}),(dispatch)=>bindActionCreators(searchCreate,dispatch))(Search)