import React, { Component } from 'react'
import './Body.css'
import LeftBar from './LeftBar/LeftBar'
import RightBar from './RightBar/RightBar'
import MidBar from './MidBar/MidBar'
class Body extends Component {
  render () {
    return (
      <div>
        <div className='full-back-splash'>
          <div className='pagebar container-three'>
            <LeftBar value={this.props.value.left} />
            <MidBar value={this.props.value.mid} />
            <RightBar value={this.props.value.right} />
          </div>
        </div>
      </div>
    )
  }
}
export default Body
