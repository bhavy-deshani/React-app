import React, { Component } from 'react'
import CompositionChild from './CompositionChild'

export default class ClassCompoCompositionVsInheritance extends Component {
  render() {
    return (
      <div>
        <h2>Parent component</h2>
        <CompositionChild data="this is props data">
            <h3>something</h3>
            <p>This is the data form parent component with html strucutre</p>
        </CompositionChild>
      </div>
    )
  }
}
