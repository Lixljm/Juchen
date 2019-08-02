import React from "react"
import  "../../App.css"
import {
    BrowserRouter as Router,
    Route,
    withRouter
} from "react-router-dom"


 class User extends React.Component{
    render(){
        return(
            <div className={"Box"}>
                <div className={"Btop"}>
                </div>
                <div className={"Bbottom"}></div>
            </div>
        )
    }
}
export default withRouter(User)