import React, { Component } from 'react'
import './Tweets.css'
import Card from '@material-ui/core/Card'
import axios from '../../../../../axios-instance'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../../Store/Actions/action-types'

// import Tweets from './components/Tweets/Tweets.js'
import TweetList from './TweetList/TweetList'
import TweetInput from './TweetInput/TweetInput'
class Tweets extends Component {
  addTweet = contents => {
    const maxID = this.props.tweets.length !== 0
      ? Math.max(...this.props.tweets.map(curr => curr.content.tweetID)) + 1
      : 0
    const tweets = [
      ...this.props.tweets,
      {
        content: { tweetID: maxID, content: contents }
      }
    ]
    axios.put('/tweets.json', tweets).then(() => {
      this.props.createTweet(tweets)
    })
  }

  editTweet = (id, contents) => {
    const newTweets = this.props.tweets.map(
      tweet =>
        (tweet.content.tweetID !== id
          ? tweet
          : { content: { tweetID: tweet.content.tweetID, content: contents } })
    )
    axios.put('/tweets.json', newTweets).then(() => {
      this.props.updateTweet(newTweets)
    })
  }

  deleteTweet = id => {
    const newTweets = this.props.tweets.filter(
      tweet => tweet.content.tweetID !== id
    )
    axios.put('/tweets.json', newTweets).then(() => {
      this.props.deleteTweet(newTweets)
      this.render()
    })
  }

  componentDidMount () {
    axios.get('/tweets.json').then(response => {
      if (response) {
        this.props.getTweets(response)
      }
    })
    return true
  }
  render () {
    return (
      <Card>
        <TweetInput addTweet={this.addTweet} editTweet={this.editTweet} />
        <TweetList tweets={this.props.tweets} deleteTweet={this.deleteTweet} />
      </Card>
    )
  }
}
const mapStateToProps = state => ({
  tweets: state.tweets
})

const mapDispatchToProps = dispatch => ({
  getTweets: tweets => dispatch({ type: actionTypes.GET_TWEETS, tweets }),
  createTweet: tweets => dispatch({ type: actionTypes.CREATE_TWEET, tweets }),
  updateTweet: tweets => dispatch({ type: actionTypes.UPDATE_TWEET, tweets }),
  deleteTweet: tweets => dispatch({ type: actionTypes.DELETE_TWEET, tweets })
})
export default connect(mapStateToProps, mapDispatchToProps)(Tweets)
