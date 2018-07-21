import _ from 'lodash'
import redditservice from '../../Services/reddit'
import * as types from './actiontypes'
import * as topicselector from '../topics/reducer'

export function fetchpost()  {
    return async(dispatch,getstate) => {
        try{
           const selectedtopicurl = topicselector.getselectedtopics(getstate())
           const fetchpromises = _.map(selectedtopicurl, (topicurl)=> redditservice.getPostsFromSubreddit(topicurl))
           const topicpost = await Promise.all(fetchpromises)
           const postbyid = _.keyBy(_.flatten(topicpost),(post) => post.id )
           
           dispatch({
               type: types.POST_FETCHED,
               postbyid
           })
        
        }
        catch(error){
             console.log(error)
        }
    }
}

export function changefilter(filter){
    return(dispatch) =>{
        dispatch({
            type: types.FILTER_CHANGED,
            filter: filter,
        })
    }
}
export function selectPost(postId) {
    return({ type: types.POST_SELECTED, postId });
  }