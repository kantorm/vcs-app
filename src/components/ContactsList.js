import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContactLine from './ContactLine'
import '../assets/ContactsList.css'

export default class ContactsList extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  render() {
    const {fields} = this.props;
    return (
      <div>
        {fields.map((contact, index) => <ContactLine index={index} fields={fields} key={contact} handleSubmit={this.props.handleSubmit}/>)}
      </div>
    )
  }
}
