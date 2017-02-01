import React, { Component } from 'react';
import Component1 from './Component1';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState : 0
        }
    }
    tabChange (idx) {
        if(this.state.tabState === idx) {
            return false
        }
        this.setState({
            tabState : idx
        })
    }
    render() {
        console.log("App.js - render");
        return (
            <article className="component-box">
                <h1>Updating prop 예제 - App.js</h1>
                <ul className="tabList">
                    <li><button type="button" onClick={()=>this.tabChange(0)}>전체</button></li>
                    <li><button type="button" onClick={()=>this.tabChange(1)}>Component1</button></li>
                </ul>
                <Component1 tabState={this.state.tabState} />
            </article>
        );
    }
}