import _ from 'lodash'
import * as types from './actiontypes'
import Immutable from 'seamless-immutable'
import * as topicselector from '../topics/reducer'

const initialstate = Immutable({
postbyid: [],
filter: "all",
currentpostid: undefined,
})

export default function reduce(state = initialstate, action={}){
    switch(action.type){
    case types.POST_FETCHED:
    
    return state.merge({
      postbyid: action.postbyid,
    })
    
    case types.FILTER_CHANGED:
    return state.merge({
        filter: action.filter,
    })
    
    case types.POST_SELECTED:
    return state.merge({
currentpostid: action.postId 
    })
    default:
    return state

    }
}

//selector

export function getpost(state) {
    const postbyid = state.posts.postbyid;
    const filter = state.posts.filter
    const selectedtopics = topicselector.getselectedtopicurl(state)
    const postbyidkeys = (filter === "all")?
    _.filter(_.keys(postbyid), (postid)=> selectedtopics[postbyid[postid].topicUrl]):
    _.filter(_.keys(postbyid), (postid)=>postbyid[postid].topicUrl === filter )

    return [postbyid, postbyidkeys];   
}

export function getfilter(state){
    return state.posts.filter
}
export function getcurrentpostid(state){
    return _.get(state.posts.postbyid, state.posts.currentpostid)
}