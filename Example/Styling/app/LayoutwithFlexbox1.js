import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import {Wrapper} from './Wrapper';

export default class extends Component {
    render() {
        return (
            <Wrapper {...this.props}>
                <View style={{flex: 1, backgroundColor: "yellow", padding: 10}}>
                    <Text><Text style={{fontSize: 30}}>상단 텍스트</Text> : flex: 1 (전체 적용)</Text>
                    <View style={{flex: 0.3, backgroundColor: "pink", padding: 10}}>
                        <Text>flex: 0.3 (상단 텍스트를 제외한 남은 영역을 두 박스가 3:7로 나눠가짐)</Text>
                    </View>
                    <View style={{flex: 0.7, backgroundColor: "skyblue", padding: 10}}>
                        <Text>flex: 0.7 (상단 텍스트를 제외한 남은 영역을 두 박스가 3:7로 나눠가짐)</Text>
                    </View>
                </View>
            </Wrapper>
        )
    }
}
