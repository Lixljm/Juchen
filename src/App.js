import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  bindActionCreators
} from "redux"
import {connect} from "react-redux"
import router from "./router"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import GraudRoute from "./router/GraudRoute"
import Nav from "./router/Nav"

export default class App extends React.Component{
  render(){
      return (
          <div className="App">
              <Router>
                <Nav></Nav>
              {
                 router.map((v,i)=>{
                     return(
                         <Route key={i} path={v.path} exact={v.exact} render={()=><GraudRoute {...v}/>}></Route>
                  )
              })
              }
              </Router>
          </div>
      )
  }
}


