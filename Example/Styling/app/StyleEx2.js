import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

import {Wrapper} from './Wrapper';

export default class extends Component {
    render() {
        return (
            <Wrapper {...this.props}>
                <ScrollView style={{flex:1, backgroundColor : "pink", padding:10}}>
                    <View>
                        <Text>inline style 사용</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}