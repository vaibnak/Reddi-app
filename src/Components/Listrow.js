import React, { Component } from 'react'

export default class Listrow extends Component {
   clicking(){
       this.props.clicking(this.props.rowid)
   }
  
    render() {
      
    const background = (this.props.selected)?'#c0f0ff' : '#fff';
    return (
       
      <div
      style = {{background}}
      onClick = {this.clicking.bind(this)}
      key={this.props.rowid}
      >
      {this.props.children}
      </div>
    )
  }
}
