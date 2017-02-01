import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillReceiveProps  (nextProps) {
        console.log("Component1.js - componentWillReceiveProps", nextProps)
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log("Component1.js - shouldComponentUpdate", nextProps, nextState)
        return true
    }
    componentWillUpdate () {
        console.log("Component1.js - componentWillUpdate");
    }
    componentDidUpdate () {
        console.log("Component1.js - componentDidUpdate");
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