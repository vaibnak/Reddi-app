import React, { Component } from 'react'
import _ from 'lodash'

export default class Topicfilter extends Component {
  renderfilter(id, label){
    console.log("id fo topicfilter ", id)
    const className = this.props.filter === id? "selected":undefined;
    return(
      <a
      className = {className}
      href = "#"
      key={id}
      onClick = {()=>{this.onfilterclick(id)}}>
      {label}
      </a>
      
    )
  }

  onfilterclick(id){
  if(id === this.props.selected) return;
  this.props.changefilter(id);
  }
  render() {
    console.log("props of topicfilter", this.props)
    return (
      <div className={this.props.className}>
      {this.renderfilter("all", "ALL")}
      {_.map(this.props.topic, (topic, topicid) => this.renderfilter(topicid, topic.title))}
        
      </div>
    )
  }
}
