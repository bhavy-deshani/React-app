import React, { Component } from 'react'

export default class WelcomeTOClassComponent extends Component {
  render() {
    return (
        <>
      <div>
        <h2>Welcome To Class Component</h2>

        <p>Class is a collection of datamember and member function only</p>
        <p>in react we have render as default method for getting output from class compo</p>


        <h2>What is Component</h2>
        <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components</p>

        <h2>What is State</h2>

        <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>

        <h2>What is Props</h2>
        <p>In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.</p>
      </div>



        </>
    )
  }
}
