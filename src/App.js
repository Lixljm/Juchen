import React from 'react';
import logo from './logo.svg';
import ReactDOM from "react-dom"
import {TransitionGroup,CSSTransition}  from  "react-transition-group"
import './App.css';
import {
  bindActionCreators
} from "redux"
import {connect} from "react-redux"
import router from "./router"
import {
    Switch,
    Link,
    Redirect,
    BrowserRouter as Router,
    Route,
    withRouter
} from "react-router-dom"
import GraudRoute from "./router/GraudRoute"
import Nav from "./router/Nav"
import "lib-flexible"
import Navlist from "./common/table"
import Rouaa from "../src/common/table"
import "./style/trans.scss"

import Navtab from './common/table'

const ANIMATION_MAP = {
    PUSH: "forward",
    POP: "back",
}

const Routes  = withRouter(({location,history})=>{
 return(
     <TransitionGroup
         className={"router-wrapper"}
         childFactory={child => React.cloneElement(
             child,
             {classNames: ANIMATION_MAP[history.action]}
         )}
     >
       <CSSTransition key={location.pathname}
       timeout={500}>
           <Switch>
               <Rouaa></Rouaa>
           </Switch>
       </CSSTransition>
     </TransitionGroup>
 )
})
 class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isloding:false,
        }
    }
    render(){
        return(
            <div className={"App"}>
                <Router>
                    <Routes></Routes>
                </Router>
            </div>
        )
    }
    componentWillMount(){
        if(this.state.isloding){
            this.setState({
                isloding: false
            })
        }
    }
 }

export default App;



