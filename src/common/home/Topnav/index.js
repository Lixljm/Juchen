import React from "react"
import {withRouter,Link} from "react-router-dom"
class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topnav:[],
        }
    }
     render(){
         // console.log(222232453546456575,this.state.topnav)
         return(
             <div>
                 <div  id={"topnav"}>
                     <ul>
                     {this.state.topnav?
                         this.state.topnav.map((v,i)=>{
                            return <div key={i}>
                                <Link to={"/show"}>  <li ><i><img src={v.pic} alt=""/></i><span>{v.name}</span></li></Link>
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
export default withRouter(TopNav);