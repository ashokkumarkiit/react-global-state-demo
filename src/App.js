// App.js
import React, { Component } from 'react'
import { createStore} from './store'
import Home from './Home';
import './App.css';

class MyApp extends Component{
  render(){
    return(
      <div>
        <Home />
      </div>
    );
  }
}
export default createStore(MyApp);
