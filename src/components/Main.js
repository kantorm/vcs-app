import React, { PureComponent } from 'react'

export default class Main extends PureComponent {
  onChange = ({target: {name, value}}) => {
    if (!isNaN(value)) {
      this.setState({[name]: value});
    }
  };

  render() {
    return (
      <div>
        Contacts app
      </div>
    )
  }
}
