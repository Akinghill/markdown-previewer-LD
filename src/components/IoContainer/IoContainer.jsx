import React, { Component } from 'react'
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { ThemeContext } from '../../contexts/ThemeContext';
const marked = require('marked')


export default class IoContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  static contextType = ThemeContext;

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }

  state = {
    markdown: ''
  }

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark
    const { markdown } = this.state
    return (
      <div className="io-container">
          <div className="section">
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                as="textarea"
                placeholder="Enter Markdown"
                value={markdown}
                onChange={this.handleChange}
                style={{ height: "90vh", borderRadius: "10px", border: `1px solid ${theme.primaryColor}`, backgroundColor: theme.onPrimary}}
              >
              </FormControl>
            </FormGroup>
          </div>
          <div className="section">
            <div style={{backgroundColor: theme.outputBG, border: `1px solid ${theme.primaryColor}`}} className="output" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
            </div>
          </div>
        </div>
    )
  }
}
