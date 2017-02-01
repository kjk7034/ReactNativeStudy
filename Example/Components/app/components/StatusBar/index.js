import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    ScrollView,
    StatusBar
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
            <Wrapper title="StatusBar 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <StatusBar
                        animated={true}
                        hidden={false}
                        backgroundColor="blue" // 안드로이드용
                        barStyle="default" // IOS용
                        style={{backgroundColor: "red"}}
                    />
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>내용</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}