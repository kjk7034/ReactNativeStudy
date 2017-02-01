import React, { Component } from 'react';
import Component1 from './Component1';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Component1 : true
        }
    }
    toggle () {
        this.setState({
            Component1 : !this.state.Component1
        })
    }
    render() {
        return (
            <article className="component-box">
                <h1>Unmounting 예제 - App.js</h1>
                <button type="button" onClick={()=>this.toggle(0)}>Component1 - On/Off</button>
                {
                    this.state.Component1 ? <Component1 {...this.props} /> : null
                }
            </article>
        );
    }
}
