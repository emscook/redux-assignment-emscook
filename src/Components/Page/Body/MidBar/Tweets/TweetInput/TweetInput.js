import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class TweetInput extends Component {
  state = {
    value: '',
    target: ''
  }
  inputChangeHandler = e => {
    this.setState({
      value: e.target.value
    })
  }

  targetChangeHandler = e => {
    this.setState({
      target: e.target.value
    })
  }
  targetKeyPressed = e => {
    console.log(this.state.target)
    if (e.key === 'Enter') {
      if (this.state.target === '') {
        this.props.addTweet(this.state.value)
      } else {
        this.props.editTweet(parseInt(this.state.target), this.state.value)
      }
    }
  }
  keyPressed = e => {
    if (e.key === 'Enter') {
      if (this.state.target === '') {
        this.props.addTweet(this.state.value)
      } else {
        this.props.editTweet(parseInt(this.state.target), this.state.value)
      }
    }
  }
  render () {
    return (
      <div>
        <TextField
          type='text'
          label='Contents'
          value={this.state.value}
          onChange={this.inputChangeHandler}
          onKeyPress={this.keyPressed}
        />
        <TextField
          type='text'
          label='Target Tweet'
          value={this.state.targetValue}
          onChange={this.targetChangeHandler}
          onKeyPress={this.keyPressed}
        />
      </div>
    )
  }
}

export default TweetInput
