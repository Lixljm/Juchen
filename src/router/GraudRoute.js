import React from "react"
import {
    Route,
} from "react-router-dom"
<<<<<<< HEAD
import Navlist from "./Nav"
=======
import NavList from './Nav'
>>>>>>> 9bcf359b77d9c4d525c1ea89c1d0f8b4db1e2e8b
export  default class GraudRoute extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
<<<<<<< HEAD

                    <this.props.component {...this.props}/>
                {
                    this.props.isok? <Navlist></Navlist>:null
                }


=======
                <this.props.component {...this.props}/>
                <NavList></NavList>
>>>>>>> 9bcf359b77d9c4d525c1ea89c1d0f8b4db1e2e8b
            </div>
        )
    }
}