import React from "react"
import "../../style/home/index.scss"
import { 
    Link
} from 'react-router-dom'
import Area from "../../common/home/Area"
import Tourshow from "../../common/home/Tourshow"
import Membership from "../../common/home/Membership"
import Hotvenue from "../../common/home/Hotvenue"
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            flage : false
        }
    }
    render(){
        return(
            <div>
            <div className="head" style={{background : this.state.flage?'#fff':'rgba(0 0 0 0.1)'}} ref={"homConatiner"}>
               <div className={"head-left"}><strong>o</strong> <span>全国</span></div> 
               <Link to={"/search"}><div className="head-center">搜索热门演出</div></Link> 
                <span className={"head-right"}><img style={{width:"30px",height:"30px"}} src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png"></img></span>
            </div>
            <div style={{width:"100%",height:"600px",background:"#000000"}}>

            </div>
            <Area></Area>
            <Tourshow></Tourshow>
            <Membership></Membership>
            <Hotvenue></Hotvenue>
            </div>
        )
    }
    componentDidMount(){
       window.addEventListener('scroll', ()=>{
            if(window.scrollY>0){
            this.setState({
                flage:true 
            })
        }else{
            this.setState({
                flage:false 
            })
        }
       });	
      }
}