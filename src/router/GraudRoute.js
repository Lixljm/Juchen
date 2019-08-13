import React from "react"
import {
    Route,
} from "react-router-dom"
import Navlist from "./Nav"
export  default class GraudRoute extends React.Component{

    render(){
         console.log(this.props)
        return(
            <div>
                {
                    this.props.isShow?<Navlist></Navlist>:null
                }
                <this.props.component/>

            </div>
        )
    }
}