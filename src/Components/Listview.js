import React, { Component } from 'react'
import _ from 'lodash'
export default class Listview extends Component {
    constructor(){
        super()
        this.show = this.show.bind(this)
        this.assignkey = this.assignkey.bind(this)
    }
    show(rowid){
      return(
       
        this.props.func(rowid, _.get(this.props.row, rowid))
      );  
     }

     assignkey(rowid){
      return(
      <li key={rowid}>
      {this.show(rowid)}
      </li>
      ); 
    }
    render() {
    
    return (
      <div>
        <ul>
       {_.map(this.props.rowid, this.assignkey)}
        </ul>
      </div>
    )
  }
}
