import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {reduxForm, FieldArray} from 'redux-form'
import { connect } from 'react-redux'

import ContactsList from './ContactsList'

export class ContactsForm extends PureComponent {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
  }

  componentWillMount = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')).contacts;
    this.props.initialize({contacts});
  }


  addContact = () => {
    this.props.array.push('contacts', {})
  }

  render() {
    return (
      <div className='container-fluid'>
        <form>
          <div className='btn-group'>
            <div className='btn btn-primary' onClick={this.addContact}>Add contact</div>
            <div className='btn btn-success' onClick={this.props.handleSubmit}>Save Contacts</div>
          </div>
          <FieldArray name='contacts' component={ContactsList} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'contactsForm',
  onSubmit: (values) => localStorage.setItem('contacts', JSON.stringify(values))
})(ContactsForm)
