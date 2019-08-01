import React from "react"
import router from "./index"
import {
    NavLink,
} from "react-router-dom"
export default class Nav extends React.Component{
 render(){
     return(
         <div>
             {
                 router.map((v,i)=>{
                     return(
                         <NavLink key={i} exact={v.exact} to={v.to}>{v.context}</NavLink>
                     )
                 })
             }
         </div>
     )
 }
}