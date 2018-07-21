import _ from 'lodash';
import * as types from './Actiontypes';
import redditservice from '../../Services/reddit'
import * as topicselector from './reducer'
export function Fetchtopics(){

    return async (dispatch, getState) => {
    try {
        
        const subredditarray = await redditservice.getDefaultSubreddits();
        //const topicByurl = subredditarray.data;
        const topicByurl = _.keyBy(subredditarray, (subreddit) => subreddit.url);
        

        dispatch({
            type: types.TOPICS_FETCHED,
            topicByurl,
        })
    } catch (error) {
        console.log(error)
    }
}
}

export function selectedchoice(item){
    return (dispatch, getState) => {
        
   const selecteditems = topicselector.getselectedtopics(getState());
   
   const newselecteditems = selecteditems.length < 3 ?
   selecteditems.concat(item):
   selecteditems.slice(1).concat(item);

   dispatch({
       type: types.TOPICS_SELECTED,
       payload: newselecteditems,
   })
    }
}

export function changescreen(){
    return(dispatch) => {
        dispatch({
            type:types.SCREEN_CHANGED,
        })
    }
}