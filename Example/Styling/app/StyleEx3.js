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
                <ScrollView style={[styles.ScrollView, styles.Test]}>
                    <View>
                        <Text>변수활용 && 스타일 상속 && 배열 처리</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    ScrollView : {
        flex:1,
        backgroundColor : "pink",
        padding:10
    },
    Test : {
        backgroundColor : "yellow",
    }
})