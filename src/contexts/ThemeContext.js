import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      primaryColor: '#ff5c5c',
      primaryVariant: '#ff2d2d',
      secondaryColor: '#1b9999',
      onPrimary: 'rgb(250, 250, 250)',
      onBackground: 'rgb(66, 66, 66)',
      navBackground: 'rgba(255, 255, 255, 0.5)',
      outputBG: 'rgba(241, 241, 241, 0.6)'
    },
    dark: {
      primaryColor: '#9641ff',
      primaryVariant: '#6c63ff',
      secondaryColor: '#03dac5',
      onPrimary: '#121212',
      onBackground: 'rgba(255, 255, 255, 0.9)',
      navBackground: 'rgba(0, 0, 0, 0.5)',
      outputBG: 'rgba(9,9,9, 0.9)'
    }
  }

  toggleTheme = () => {
    console.log('theme toggled')
    this.setState({ isLightTheme: !this.state.isLightTheme })
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;