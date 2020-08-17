import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import TopBar from './components/TopBar/TopBar'

const marked = require('marked')

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }

  state = {
    markdown: ''
  }

  render() {
    const { markdown } = this.state
    return (
      <div className="App">
        <TopBar></TopBar>
        <div className="io-container">
          <div className="section">
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                as="textarea"
                placeholder="Enter Markdown"
                value={markdown}
                onChange={this.handleChange}
                style={{height: "90vh", borderRadius: "10px", border: "1px solid #1b9999"}}
              >
              </FormControl>
            </FormGroup>
          </div>
          <div className="section">
            <div className="output" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
