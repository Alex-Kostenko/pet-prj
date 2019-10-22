import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import RenderRegistraion from './component/registration';
import UserInfo from './component/userInfo';
import MainPage from './component/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={MainPage} />
        <Route path="/registration" component={RenderRegistraion} />
        <Route path="/user" component={UserInfo} />
      </Router>
    );
  }
}

export default App;
