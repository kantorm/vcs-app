import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {reduxForm, FieldArray} from 'redux-form'

import ContactsList from './ContactsList'

export class ContactsForm extends PureComponent {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
  }

  componentWillMount = () => {
    const storage = JSON.parse(localStorage.getItem('contacts'))
    let contacts = []
    if (storage && storage.contacts) contacts = storage.contacts
    contacts = contacts.map((contact) => ({ ...contact, loadedFromStorage: true }))
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
          </div>
          <FieldArray name='contacts' component={ContactsList} handleSubmit={this.props.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'contactsForm',
  onSubmit: (values) => {
    localStorage.setItem('contacts', JSON.stringify(values))
  }
})(ContactsForm)
