// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isRegistrationDone: false,
    firstNameError: false,
    lastNameError: false,
  }

  submitRegistrationForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    const isFirstNameEmpty = firstName === ''
    const isLastNameEmpty = lastName === ''

    if (isFirstNameEmpty || isLastNameEmpty) {
      this.setState({
        firstNameError: isFirstNameEmpty,
        lastNameError: isLastNameEmpty,
      })
    } else {
      this.setState({isRegistrationDone: true})
    }
  }

  firstNameInput = event => {
    this.setState({firstName: event.target.value, firstNameError: false})
  }

  lastNameInput = event => {
    this.setState({lastName: event.target.value, lastNameError: false})
  }

  checkFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    }
  }

  checkLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isRegistrationDone: false,
      firstNameError: false,
      lastNameError: false,
    })
  }

  renderRegistrationPage = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state
    return (
      <form
        className="form-bg-container"
        onSubmit={this.submitRegistrationForm}
      >
        <div className="form-description-container">
          <label className="label-element" htmlFor="firstNameIp">
            FIRST NAME
          </label>
          <input
            id="firstNameIp"
            onChange={this.firstNameInput}
            onBlur={this.checkFirstName}
            placeholder="First name"
            type="text"
            value={firstName}
            className={`input-element ${firstNameError ? 'error-input' : ''}`}
          />
          {firstNameError && <p className="required-error"> Required </p>}
        </div>
        <div className="form-description-container">
          <label className="label-element" htmlFor="lastNameIp">
            LAST NAME
          </label>
          <input
            id="lastNameIp"
            onChange={this.lastNameInput}
            onBlur={this.checkLastName}
            placeholder="Last name"
            type="text"
            value={lastName}
            className={`input-element ${lastNameError ? 'error-input' : ''}`}
          />
          {lastNameError && <p className="required-error"> Required </p>}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  renderRegistrationSuccessPage = () => (
    <div className="success-page-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submission-successful-message">Submitted Successfully</p>
      <button
        onClick={this.resetForm}
        className="another-response-submission-button"
        type="button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isRegistrationDone} = this.state
    return (
      <div className="registration-form">
        <h1 className="registration-title"> Registration </h1>
        {isRegistrationDone
          ? this.renderRegistrationSuccessPage()
          : this.renderRegistrationPage()}
      </div>
    )
  }
}

export default RegistrationForm
