import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Topicscreen.css'
import * as topicsSelectors from '../Store/topics/reducer';
import * as topicaction from '../Store/topics/Actions'
import Listview from '../Components/Listview';
import Listrow from '../Components/Listrow';
 
     
    class Topicscreen extends Component {
  constructor(){
    super()
   this.onRowClick = this.onRowClick.bind(this)
   this.renderrow = this.renderrow.bind(this) 
   this.nextscreen = this.nextscreen.bind(this)
  }   
  componentDidMount(){
         
         this.props.dispatch(topicaction.Fetchtopics())
     }

     renderLoading(){
      return (
        <p>Loading...</p>
      );
    }
    nextscreen(){
      this.props.dispatch(topicaction.changescreen())
    }

    renderrow(rowid, topic){
     const selected = this.props.checkselection[rowid]
     
    
  return(

     <Listrow 
     selected = {selected}
     clicking = {this.onRowClick}
     rowid = {rowid}
     >
     
    <h3>{topic.title}</h3>
    <p>{topic.description}</p>
  
     </Listrow>
   )
  }

  onRowClick(rowid) {
     
    this.props.dispatch(topicaction.selectedchoice(rowid));
    
  }

  render() {
  
  if (!this.props.topicsByurl) return this.renderLoading();  
    return (
      <div className="TopicsScreen">
      
        <h1>Choose any three of the below topics</h1>
        <Listview
        rowid={this.props.topicsurlArray}
        row = {this.props.topicsByurl}
        func = {this.renderrow}
       />{this.props.pointervisibility ?
       <button className="NextScreen" onClick={this.nextscreen}/>
       : false
       }
      </div>
    )
  }
}



function mapStateToProps(state){
  const [topicsByurl, topicsurlArray] = topicsSelectors.getTopics(state);
  return {
    topicsByurl,
    topicsurlArray,
    checkselection: topicsSelectors.getarrangedtopics(state),
    pointervisibility: topicsSelectors.pointervisibility(state),

}
}

export default connect(mapStateToProps)(Topicscreen); 