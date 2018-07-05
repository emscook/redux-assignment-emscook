import * as actionTypes from '../Actions/action-types'

const initialState = {
  tweets: []
}

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      }
    case actionTypes.CREATE_TWEET:
      return {
        ...state,
        tweets: action.tweets
      }
    case actionTypes.UPDATE_TWEET:
      return {
        ...state,
        tweets: action.tweets
      }
    case actionTypes.DELETE_TWEET:
      return {
        ...state,
        tweets: action.tweets
      }
    default:
      return state
  }
}

export default tweetReducer
