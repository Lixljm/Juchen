import React from "react"
import Tt from "../../components/ticket"
import "../../style/yanchuxiangqing/index.scss"
import {
    Route
} from "react-router-dom"
export default class Ticket extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.children.map((v,i)=>{
                        return (
                            <Route key={i} {...v}></Route>
                        )
                    })
                }
            </div>
        )
    }
}