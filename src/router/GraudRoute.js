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

                    <this.props.component {...this.props}/>
                {
                    this.props.isok? <Navlist></Navlist>:null
                }


            </div>
        )
    }
}