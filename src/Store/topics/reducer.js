import * as types from './Actiontypes';
import Immutable from 'seamless-immutable'
import _ from 'lodash';
const initialState = Immutable({
 topicsByurl: undefined,
 SelectedTopicsurl: [],
 topicsfinalized: false,
}) 

export default function reduce(state = initialState, action){
    switch(action.type){
        case types.TOPICS_FETCHED:   
          
         return state.merge({
            
             topicsByurl: action.topicByurl
         });

         case types.TOPICS_SELECTED:
         return state.merge({
            SelectedTopicsurl: action.payload, 
         })
         case types.SCREEN_CHANGED:
         return state.merge({
           topicsfinalized: true,  
         })

    default:
    return state;
    }
}
//Selector
export function getTopics(state) {
  
    const topicsByurl = state.topics.topicsByurl;
    const topicsurlArray = _.keys(topicsByurl);
    return [topicsByurl, topicsurlArray];
  }

  export function getselectedtopics(state) {
   
    return state.topics.SelectedTopicsurl;
  }
  
  export function getarrangedtopics(state) {
      
    return _.mapValues(_.keyBy(state.topics.SelectedTopicsurl), (topicUrl) => state.topics.topicsByurl[topicUrl]);
     
}
  
  export function getselectedkey(state){
      return _.keys(state.topics.selectedTopicurls)
  }

  export function telldecision(state){
      return state.topics.topicsfinalized;
  }

  export function pointervisibility(state){
      return state.topics.SelectedTopicsurl.length === 3;
  }

  export function getselectedtopicurl(state){
      
      return _.mapValues(_.keyBy(state.topics.SelectedTopicsurl),(topic) => state.topics.topicsByurl[topic] )
  }