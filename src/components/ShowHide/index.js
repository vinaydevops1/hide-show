// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {countFirstname: 0, countLastname: 0}

  showHideFirstname = () => {
    this.setState(prevState => ({countFirstname: prevState.countFirstname + 1}))
  }

  showHideLastname = () => {
    this.setState(prevState => ({countLastname: prevState.countLastname + 1}))
  }

  render() {
    const {countFirstname, countLastname} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-container">
            <div className="hide-container">
              <button
                type="button"
                className="button"
                onClick={this.showHideFirstname}
              >
                Show/Hide Firstname
              </button>
              {countFirstname % 2 === 1 && <p className="paragraph1">Joe</p>}
            </div>

            <div className="hide-container">
              <button
                type="button"
                className="button"
                onClick={this.showHideLastname}
              >
                Show/Hide Lastname
              </button>
              {countLastname % 2 === 1 && <p className="paragraph2">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
