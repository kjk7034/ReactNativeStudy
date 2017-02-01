import React, {Component} from 'react';
import {
    View,
    Text,
    Slider,
    ScrollView,
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
            <Wrapper title="Text 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Box}>
                        <Text>numberOfLines : 1, ellipsizeMode : tail(default)</Text>
                        <Text numberOfLines={1}>numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>numberOfLines : 1, ellipsizeMode : head</Text>
                        <Text numberOfLines={1} ellipsizeMode="head">numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>numberOfLines : 1, ellipsizeMode : middle</Text>
                        <Text numberOfLines={1} ellipsizeMode="middle">numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>numberOfLines : 2</Text>
                        <Text numberOfLines={2}>numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.numberOfLines 테스트중입니다.</Text>
                    </View>
                    <View style={Style.Box}>
                        <Text>Nesting 테스트</Text>
                        <Text style={Style.Color}>
                            컬러 : red <Text style={Style.Size}>size : 40</Text>
                        </Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}