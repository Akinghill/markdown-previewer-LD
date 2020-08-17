import React, { Component } from 'react'
import './TopBar.scss'

export default class TopBar extends Component {
  render() {
    return (
      <div className='top-bar'>
        <p>Markdown Previewer</p>

        {/* <!-- Dark Mode Switch --> */}
          <span id="toggle-icon">
            <i className="my-sun"></i>
          </span>
      </div>
    )
  }
}
