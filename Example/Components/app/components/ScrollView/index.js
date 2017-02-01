import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Wrapper title="ScrollView 예제" {...this.props}>
                <ScrollView keyboardShouldPersistTaps={true} contentContainerStyle={Style.contentContainerStyle} style={Style.Contents}>
                    <View style={Style.Box}>
                        <Text style={Style.textInfo}>기본</Text>
                        <Text style={Style.textInfo}>contentContainerStyle vs style 소개</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                    <View style={Style.Box}>
                        <TextInput placeholder="<TextInput - 1 />" style={Style.textInput} />
                    </View>
                    <View style={Style.Box}>
                        <TextInput placeholder="<TextInput - 2 />" style={Style.textInput} />
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={Style.contentContainerStyle} style={Style.Contents}>
                    <View style={Style.Box}>
                        <Text style={Style.textInfo}>horizontal - True</Text>
                    </View>
                    <View style={Style.Box}>
                        <TextInput placeholder="<TextInput - 3 />" style={Style.textInput} />
                    </View>
                    <View style={Style.Box}>
                        <TextInput placeholder="<TextInput - 4 />" style={Style.textInput} />
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>Box</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}