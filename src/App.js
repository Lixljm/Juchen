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
<<<<<<< HEAD
import Rouaa  from "../src/common/table"
=======
import Navtab from './common/table'
>>>>>>> 9bcf359b77d9c4d525c1ea89c1d0f8b4db1e2e8b


export default class App extends React.Component{
  render(){
      return (
          <div className="App">
              <Router>
<<<<<<< HEAD
                  <Rouaa></Rouaa>
=======
                    <Navtab></Navtab>
>>>>>>> 9bcf359b77d9c4d525c1ea89c1d0f8b4db1e2e8b
              </Router>
          </div>
      )
  }
}


