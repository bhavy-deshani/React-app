import React, { Component } from 'react'
import { useLinkClickHandler } from 'react-router-dom';

export default class StateClasscomponent extends Component {
    dataMember = "Something Data Member"
    constructor(props) {
        super(props);
        this.state = {
            stateData: "init",
            valueForIncreDec: 0,
            trunonoff: true
        }
    }

    clickHandlerSomething = () => {
        console.log("called");
        this.dataMember = "change..."
        this.setState({ stateData: "Other data" })
    }

    increment = () => {
        this.setState({ valueForIncreDec: this.state.valueForIncreDec + 1 })
    }
    render() {
        let data = "Something..."
        return (
            <>
                {data} <br />
                {this.dataMember} 
                <button onClick={this.clickHandlerSomething}>Click</button>
                <br />
                <button onClick={this.increment}>Incrememnt</button>
                {this.state.valueForIncreDec}
                <button onClick={() =>{this.setState({ valueForIncreDec: this.state.valueForIncreDec - 1 })}}>Decrement</button>
                <br />
                <br />
                <button onClick={()=>{this.setState({trunonoff:!this.state.trunonoff})}}> {this.state.trunonoff? "on":"off"}</button>
            </>
        )
    }
}
