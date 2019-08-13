import React from "react"
import router from "./index"
import {
    NavLink,
} from "react-router-dom"
export default class Nav extends React.Component{
 render(){
     console.log("okok")
     return(
         <div className={"tabar"}>
             {
                 router.map((v,i)=>{
                     return(
                         v.isok? <NavLink className={"navStyle"} key={i} exact={v.exact} to={v.to} activeStyle={{color:"orange"}}><i className={v.className}
                          style={{fontSize:"40px"}} ></i>{v.context}</NavLink>:null
                     )
                 })
             }
         </div>
     )
 }
}