import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/common.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios  from "axios"

import {
    Provider
} from "react-redux";

import "lib-flexible"
import config from "./common/config,js"
import  store from "./store"
import {TransitionGroup,CSSTransition} from "react-transition-group"
// import registerServiceWorker from './ServiceWorker';


// 请求头拦截
 React.Component.prototype.config = config;


// 响应结果拦截
  axios.interceptors.response.use(({data})=>{
      return data;
  })
ReactDOM.render(<Provider store={store}>
    <TransitionGroup>
        <CSSTransition
        appear={true}
         className="appAppear"
            timeout={500}>
            <App/>
        </CSSTransition>
    </TransitionGroup>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// registerServiceWorker();
