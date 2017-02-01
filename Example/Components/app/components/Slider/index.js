import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    ScrollView
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 1
        }
    }
    render() {
        return (
            <Wrapper title="Slider 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <Slider
                        minimumValue={1}
                        maximumValue={100}
                        step={1}
                        onValueChange={(value) => this.setState({value: value})}
                    />
                    <View style={Style.Box}>
                        <Text>Value : {this.state.value} (1~100)</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}