import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState : 0
        }
        console.log("App.js - constructor")
    }
    componentWillMount () {
        console.log("App.js - componentWillMount")
    }
    componentDidMount () {
        console.log("App.js - componentDidMount")
    }
    render() {
        console.log("App.js - render");
        return (
            <article className="component-box">
                <h1>Mounting 예제 - App.js</h1>
                <Component1 />
                <Component2 />
            </article>
        );
    }
}
