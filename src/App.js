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
import "lib-flexible"
import Navlist from "./common/table"


export default class App extends React.Component{
  render(){
      return (
          <div className="App">
              <Router>
                    <Navlist></Navlist>
              </Router>
          </div>
      )
  }
}


