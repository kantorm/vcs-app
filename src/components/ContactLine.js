import React, { Component } from 'react'
import {Field} from 'redux-form'
import '../assets/ContactLine.css';

export default class componentName extends Component {
  removeContact = () => {
    this.props.fields.remove(this.props.index)
  }

  saveContact = () => {

  }

  editContact = () => {

  }

  render() {
    const {index} = this.props
    return (
      <div className="row">
        <Field
          name={`contacts[${index}].name`}
          component={contactInput}
          label='Name'
        />
        <Field
          name={`contacts[${index}].phoneNumber`}
          component={contactInput}
          label='Phone number'
        />
        <Field
          name={`contacts[${index}].email`}
          component={contactInput}
          type='email'
          label='Email'
        />
        <Field
          name={`contacts[${index}].address`}
          component={contactInput}
          label='Address'
      />
        <div className='col-md-2 btn-group' role="group" >
          <div className='btn btn-danger' onClick={this.removeContact}>Remove</div>
          <div className='btn btn-success' onClick={this.saveContact}>Save</div>
          <div className='btn btn-dark' onClick={this.editContact}>Edit</div>
        </div>
      </div>
    )
  }
}


const contactInput = (props) => {
  return (
    <div className='col-md-2' data-label={props.label}>
      <input {...props.input} placeholder={props.label} className='input' />
    </div>
  )
}
