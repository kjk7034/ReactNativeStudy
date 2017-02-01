import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        console.log("Component1.js - constructor")
    }
    componentWillMount () {
        console.log("Component1.js - componentWillMount")
    }
    componentDidMount () {
        console.log("Component1.js - componentDidMount")
    }
    render() {
        console.log("Component1.js - render");
        return (
            <section className="component-box">
                <h1>Component1.js</h1>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </section>
        );
    }
}

