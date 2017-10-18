import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContactLine from './ContactLine'
import '../assets/ContactsList.css'

export default class ContactsList extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  addContact = () => {
    this.props.fields.push({})
  }

  render() {
    const {fields} = this.props;
    return (
      <div className="container-fluid">
        <div className='btn btn-primary' onClick={this.addContact}>Add contact</div>
        {fields.map((contact, index) => <ContactLine index={index} fields={fields} key={contact} />)}
      </div>
    )
  }
}
