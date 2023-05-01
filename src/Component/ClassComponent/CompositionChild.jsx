import React, { Component } from 'react'

export default class CompositionChild extends Component {
  render() {
    return (
      <div>
        <p>Child component</p>
        This is parent component data : {this.props.data}

        {this.props.children}

        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}
