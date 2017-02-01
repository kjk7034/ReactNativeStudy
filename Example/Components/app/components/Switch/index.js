import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    ScrollView,
    Switch
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch1: true,
            switch2: false,
        }
    }
    render() {
        return (
            <Wrapper title="Switch 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Box}>
                        <Text>switch1 : {this.state.switch1 ? "True" : "False"}</Text>
                        <Switch
                            style={Style.Switch}
                            onValueChange={(value) => {this.setState({switch1: value});}}
                            onTintColor="#000" // true 배경
                            thumbTintColor="pink" // 동그란 스위치 색
                            tintColor="red" // false 배경
                            value={this.state.switch1} />
                    </View>
                    <View style={Style.Box}>
                        <Text>switch2 : {this.state.switch2? "True" : "False"}</Text>
                        <Switch
                            style={Style.Switch}
                            onValueChange={(value) => this.setState({switch2: value})}
                            onTintColor="#00ff00"
                            thumbTintColor="#0000ff"
                            tintColor="#ff0000"
                            value={this.state.switch2} />
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}