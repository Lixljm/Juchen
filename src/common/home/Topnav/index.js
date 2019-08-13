import React from "react"
import {withRouter} from "react-router-dom"
class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topnav:[],
        }
    }
     render(){
         return(
             <div>
                 <div  id={"topnav"}>
                     <ul>
                     {this.state.topnav?
                         this.state.topnav.map((v,i)=>{
                            return <div key={i} onClick={()=>this.props.history.push("/show")}>
                                 <li ><i><img src={v.pic} alt=""/></i><span>{v.name}</span></li>
                            </div>
                     }):null
                     }
                     </ul>
                 </div>
             </div>
         )
     }
    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props.b){
            this.setState({
                topnav:nextProps.b.classify_list
            })
        }
    }
}

export default withRouter(TopNav)