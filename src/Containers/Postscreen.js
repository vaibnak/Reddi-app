import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostView from '../Components/Postview'
import * as postaction from '../Store/post/action'
import * as postselector from '../Store/post/reducer'
import * as topicselector from '../Store/topics/reducer'
import Listrow from '../Components/Listrow';
import Listview from '../Components/Listview';
import './Postscreen.css'
import Topicfilter from '../Components/Topicfilter';
class Postscreen extends Component {
 constructor(){
   super()
   this.renderrow = this.renderrow.bind(this)
   this.onfilterchange = this.onfilterchange.bind(this)
   this.onpostclick = this.onpostclick.bind(this)
  }
  componentWillMount(){
this.props.dispatch(postaction.fetchpost())
 }



 renderrow(rowid, row){
 const selected = this.props.currentPost === row
  return(
  <Listrow
   rowid={rowid}
   selected={selected}
   clicking={this.onpostclick}
   >
   {!row.thumbnail? false: 
  <img className="thumbnail" src={row.thumbnail} alt="related to post"/>}
   <h3>{row.title}</h3>
   </Listrow>
   )
 }
 onpostclick(rowid){
   this.props.dispatch(postaction.selectPost(rowid))
 }
 onfilterchange(filter){
   this.props.dispatch(postaction.changefilter(filter))
 }
  render() {
    console.log("this.props", this.props)
    
    if(this.props.postbyidkeys.length === 0){
     
      return  <p>Loading...</p>
    }
    
    
    return (
      <div className="PostsScreen">
        <div className="LeftPane">
        
        <Topicfilter
        className = "TopicFilter"
        topic = {this.props.selectedtopics}
        filter = {this.props.selectedfilter}
        changefilter = {this.onfilterchange}/>
            
        
        
        <Listview
        rowid = {this.props.postbyidkeys}
        row = {this.props.postbyid}
        func = {this.renderrow}/>
        </div>
        <div className="ContentPane">
        
          <PostView post={this.props.currentPost} />
        
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const [postbyid, postbyidkeys] = postselector.getpost(state);
  return({
    postbyid: postbyid,
    postbyidkeys: postbyidkeys,
    selectedtopics: topicselector.getselectedtopicurl(state),
    selectedfilter: postselector.getfilter(state),
    currentPost: postselector.getcurrentpostid(state),
  })
}
export default connect(mapStateToProps)(Postscreen);