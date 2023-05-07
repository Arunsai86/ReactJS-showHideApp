import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="title">Show/Hide</h1>
        <div className="card-container">
          <div>
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>

            {firstName ? <p className="name-container">Joe</p> : null}
          </div>
          <div>
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>

            {lastName ? <p className="name-container"> Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
