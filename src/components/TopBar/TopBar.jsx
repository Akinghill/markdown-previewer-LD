import React, { Component } from 'react'
import './TopBar.scss'
import { ThemeContext } from '../../contexts/ThemeContext'

export default class TopBar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark, toggleTheme } = this.context;
    const theme = isLightTheme ? light : dark;

    document.body.style.backgroundColor = theme.onPrimary

    return (
      <div className='top-bar' style={{backgroundColor: theme.navBackground}}>
        <p style={{color: theme.primaryColor}}>Markdown Previewer</p>

        {/* <!-- Dark Mode Switch --> */}
          <span id="toggle-icon" onClick={toggleTheme}>
            {
              isLightTheme ? 
              <i className="my-sun"></i> :
              <i className="my-moon"></i>
            }
          </span>
      </div>
    )
  }
}
