import React, { Component } from 'react'

export default class ControlledCompoInClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { username: "", formData: {} }

    }
    submitdata = (event) => {
        event.preventDefault()
    }
    storeStateData = (event) => {
        this.setState({ username: event.target.value })
    }
    storeDatatoStateObject = (event) => {
        this.setState(prevState => ({
            formData: { ...prevState.data, [event.target.name]: event.target.value }
        }))
    }
    render() {
        return (
            <>
                <div>
                    <p>
                        In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                    </p>
                    <p>
                        We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                    </p>

                    <p>
                        For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                    </p>
                    <h2>set Data to State with function </h2>
                    <form>
                        {JSON.stringify(this.state)}
                        <input type="text" onChange={this.storeStateData} name='username' id='username' />
                        <input type="submit" value="Submit" onClick={this.submitdata} />
                    </form>
                    <h2>set multiple Data to single State object inside input arrow </h2>
                    <form>
                        {JSON.stringify(this.state)}
                        <input type="text" onChange={(event) => { this.setState({ username: event.target.value }) }} name="username" id="username" />
                        <input type="submit" onClick={this.submitdata} name="" id="" />
                    </form>
                    <h2>set multiple Data to single State object inside input arrow </h2>
                    <form>
                        {JSON.stringify(this.state.formData)} <br />
                        <input type="text" onChange={(event) => { this.setState((prevState) => ({ formData: { ...prevState.formData, [event.target.name]: event.target.value } })) }} />
                        <br />
                        <input type="text" onChange={(event) => { this.setState((koibhi) => ({ formData: { ...koibhi.formData, [event.target.name]: event.target.value } })) }} name="password" id="password" />
                        <br />
                        <input type="submit" onClick={this.submitdata} name="" id="" />   
                    </form>
                </div>
            </>
        )
    }
}
