import React, {Component} from 'react';
import {
    View,
    Text,
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
            <Wrapper title="View 예제" {...this.props}>
                <View style={Style.CenterView}>
                    <Text style={Style.textInfo}>View는 UI를 구축하기위한 가장 기본적인 구성 요소.</Text>
                    <Text style={Style.textInfo}>View는 flexbox, style, 약간의 터치조작, 접근성 컨트을 지원합니다.</Text>
                </View>
            </Wrapper>
        )
    }
}