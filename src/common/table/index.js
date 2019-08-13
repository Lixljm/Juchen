import React from "react"
import Navlist from "../../router/Nav"
import router from "../../router"
import "../../style/tabar/tabar.css"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import GraudRoute from "../../router/GraudRoute";

export default class Table extends React.Component{
    render(){
        return(
             <div>
                 <Router>
                     {
                         router.map((v, i) => {
                             return (
                                 <Route key={i} path={v.path} exact={v.exact} style={{fontsize:"40px"}}   render={() => <GraudRoute {...v}/>}>
                                 </Route>
                             )
                         })
                     }

                 </Router>
             </div>
        )
    }
}
