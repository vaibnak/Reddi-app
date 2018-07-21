import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import * as topicselector from './Store/topics/reducer';
import Topicscreen from './Containers/Topicscreen.js'
import Postscreen from './Containers/Postscreen';
class App extends Component {
  render() {
   
    return (
      <div>
      {!this.props.screenselect?
       <Topicscreen/>:
       <Postscreen/>
      }

      </div>
    );
  }
}
function mapStateToprops(state){
  return{
screenselect: topicselector.telldecision(state)
  }
}
export default connect(mapStateToprops)(App);
