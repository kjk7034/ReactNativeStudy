import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test : 0
        }
    }
    stateChange (idx) {
        this.setState({
            test : this.state.test + 1
        })
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log("App.js - shouldComponentUpdate", nextProps, nextState)
        return true
    }
    componentWillUpdate () {
        console.log("App.js - componentWillUpdate");
    }
    componentDidUpdate () {
        console.log("App.js - componentDidUpdate");
    }
    render() {
        console.log("App.js - render", this.state.test);
        return (
            <article className="component-box">
                <h1>Updating state 예제 - App.js</h1>
                <button type="button" onClick={()=>this.stateChange(0)}>state 변경</button>
            </article>
        );
    }
}