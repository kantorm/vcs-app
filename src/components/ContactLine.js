import React, { Component } from 'react'
import {Field, formValues} from 'redux-form'
import '../assets/ContactLine.css';

export class ContactLine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSaved: false
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.contacts === undefined && nextProps.contacts) {
      this.setState({isSaved: nextProps.contacts[nextProps.index].loadedFromStorage})
    }
  }

  removeContact = () => {
    this.props.fields.remove(this.props.index)
    const contacts = this.props.contacts.filter((contact, index) => index !== this.props.index)
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  saveContact = () => {
    this.props.handleSubmit()
    this.setState({isSaved: true})
  }

  editContact = () => {
    this.setState({isSaved: false})
  }

  render() {
    const {index} = this.props
    const disabled = this.state.isSaved
    return (
      <div className="row">
        <Field
          name={`contacts[${index}].name`}
          component={contactInput}
          label='Name'
          disabled={disabled}
        />
        <Field
          name={`contacts[${index}].phoneNumber`}
          component={contactInput}
          label='Phone number'
          disabled={disabled}
        />
        <Field
          name={`contacts[${index}].email`}
          component={contactInput}
          type='email'
          label='Email'
          disabled={disabled}
        />
        <Field
          name={`contacts[${index}].address`}
          component={contactInput}
          label='Address'
          disabled={disabled}
      />
        <div className='col-md-2 btn-group' role="group" >
          <div className='btn btn-danger' onClick={this.removeContact}>Remove</div>
          {!this.state.isSaved && <div className='btn btn-success' onClick={this.saveContact}>Save Contact</div>}
          {this.state.isSaved && <div className='btn btn-primary' onClick={this.editContact}>Edit Contact</div>}
        </div>
      </div>
    )
  }
}

const contactInput = (props) => {
  return (
    <div className='col-md-2' data-label={props.label}>
      <input {...props.input} placeholder={props.label} className='input' disabled={props.disabled} />
    </div>
  )
}

export default formValues('contacts')(ContactLine)
