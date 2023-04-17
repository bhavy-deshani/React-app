import React, { Component } from 'react'

export default class UnControlledCompoInClassComponent extends Component {
    constructor (props) {
        console.log("called");
        super (props);
        this.input = React.createRef()
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.input);
        console.log(this.input.current);
        console.log(this.input.current.value);
    }
  render() {
    return (
      <div>
        <h2>UnControlledCompoInClassComponent</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="text" ref={this.input} />
            <input type="submit" name="btn" id="btn" />
        </form>
         
      </div>
    )
  }
}
