import React, { PureComponent } from 'react'
import {reduxForm, FieldArray} from 'redux-form'

import ContactsList from './ContactsList'

export class Main extends PureComponent {
  render() {
    return (
      <div className='container-fluid'>
        <form>
          <FieldArray name='contacts' component={ContactsList} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'contactsForm',
})(Main)
