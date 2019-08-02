import React from "react"
import {
    Route,
} from "react-router-dom"
export  default class GraudRoute extends React.Component{
    render(){
        return(
            <div>
                <this.props.component/>
            </div>
        )
    }
}