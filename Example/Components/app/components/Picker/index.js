import React, {Component} from 'react';
import {
    View,
    Text,
    Picker,
    ScrollView
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1 : "key0"
        }
    }
    onValueChange(key, value){
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    }
    render() {
        return (
            <Wrapper title="Picker 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.PickerWrap}>
                        <Picker
                            style={Style.Picker}
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this, 'selected1')}>
                            <Picker.Item label="hello - 1" value="key0" />
                            <Picker.Item label="hello - 2" value="key1" />
                            <Picker.Item label="hello - 3" value="key2" />
                            <Picker.Item label="hello - 4" value="key3" />
                            <Picker.Item label="hello - 5" value="key4" />
                        </Picker>
                    </View>
                    <Text>state : {this.state.selected1}</Text>
                </ScrollView>
            </Wrapper>
        )
    }
}