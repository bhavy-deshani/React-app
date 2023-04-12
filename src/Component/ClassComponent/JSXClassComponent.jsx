import React, { Component } from 'react'

export default class JSXClassComponent extends Component {
  render() {
    const bhavya = {
        firstName:'bhvaya',
        lastName: 'deshani'
    };
    let something = 'My site Title'
    const headeing = <h1>{something}</h1>
    return (
      <div>
        {headeing}
        2+2 = {2+2}
        <p>FullName : {bhavya.firstName} {bhavya.lastName} </p>
      </div>
    )
  }
}
