import React, { Component } from 'react'

export default class LifeCycleInClassComponent extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            trunonoff: true
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={() => { this.setState({ trunonoff: !this.state.trunonoff }) }}>{this.state.trunonoff ? "On" : "Off"}</button>
            </div>
        )
    }
}
