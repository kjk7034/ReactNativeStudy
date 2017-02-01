import React, { Component } from 'react';
import './App.css';
import Mounting from './Mounting';
import Unmounting from './Unmounting';
import UpdatingProp from './UpdatingProp';
import UpdatingState from './UpdatingState';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState: false
        }
    }
    tabChange(idx) {
        if (this.state.tabState === idx) {
            return false
        }
        this.setState({
            tabState: idx
        })
    }
    render() {
        return (
            <article className="component-box">
                <h1>Lifecycle 예제</h1>
                <ul className="tabList">
                    <li><button type="button" onClick={() => this.tabChange("Mounting")}>Mounting</button></li>
                    <li><button type="button" onClick={() => this.tabChange("UpdatingProp")}>UpdatingProp</button></li>
                    <li><button type="button" onClick={() => this.tabChange("UpdatingState")}>UpdatingState</button></li>
                    <li><button type="button" onClick={() => this.tabChange("Unmounting")}>Unmounting</button></li>

                </ul>
                {this.state.tabState === "Mounting" && <Mounting />}
                {this.state.tabState === "UpdatingProp" && <UpdatingProp />}
                {this.state.tabState === "UpdatingState" && <UpdatingState />}
                {this.state.tabState === "Unmounting" && <Unmounting />}
            </article>
        );
    }
}
