import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar'
import IoContainer from './components/IoContainer/IoContainer'
import ThemeContextProvider from './contexts/ThemeContext';

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <ThemeContextProvider>
          <TopBar></TopBar>
          <IoContainer></IoContainer>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
