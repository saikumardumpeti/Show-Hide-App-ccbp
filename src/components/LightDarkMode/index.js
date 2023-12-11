// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const mode = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="app-container">
        <div className={`${mode} container`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
