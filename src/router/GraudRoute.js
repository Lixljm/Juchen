import React from "react"
import {
    Route,
} from "react-router-dom"
import NavList from './Nav'
export  default class GraudRoute extends React.Component{
    render(){
        return(
            <div>
                <this.props.component {...this.props}/>
                <NavList></NavList>
            </div>
        )
    }
}