import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

import {Wrapper} from './Wrapper';
import {styles} from './StyleEx1.style.js';

export default class extends Component {
    render() {
        return (
            <Wrapper {...this.props}>
                <ScrollView style={styles.ScrollView}>
                    <View>
                        <Text>import로 styles를 불러서 사용</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}