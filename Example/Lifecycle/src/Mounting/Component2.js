import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        console.log("Component2.js - constructor")
    }
    componentWillMount () {
        console.log("Component2.js - componentWillMount")
    }
    componentDidMount () {
        console.log("Component2.js - componentDidMount")
    }
    render() {
        console.log("Component2.js - render");
        return (
            <section className="component-box">
                <h1>Component2.js</h1>
            </section>
        );
    }
}
