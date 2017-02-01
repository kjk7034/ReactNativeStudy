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
            <Wrapper title="Navigator 예제" {...this.props}>
                <View style={Style.CenterView}>
                    <Text style={Style.textInfo}>네비게이터 예제는 해당 index.js로 대체</Text>
                </View>
            </Wrapper>
        )
    }
}