import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';

import {Wrapper} from './Wrapper';

const deviceWidth = Dimensions.get('window').width;

export default class extends Component {
    render() {
        return (
            <Wrapper {...this.props}>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.deviceInfo}>
                        <Text>현재 테스트 환경의 deviceWidth 값 : {deviceWidth}</Text>
                    </View>
                    <View style={styles.Box1}>
                        <Text>width : 50</Text>
                        <Text>height : 50</Text>
                    </View>
                    <View style={styles.Box2}>
                        <Text>width : 100</Text>
                        <Text>height : 100</Text>
                    </View>
                    <View style={styles.Box3}>
                        <Text>width : 300</Text>
                        <Text>height : 300</Text>
                    </View>
                    <View style={styles.Box4}>
                        <Text>width : 500</Text>
                        <Text>height : 500</Text>
                        <Text>내용내용내용내용내용내용내용 1, 내용내용내용내용내용내용내용 2, 내용내용내용내용내용내용내용 3</Text>
                        <Text>width가 500을 다 표현은 못하고 잘리는 현상을 확인 할 수 있다...</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    ScrollView : {
        flex:1,
    },
    deviceInfo : {
        margin: 10,
        padding: 10,
        borderWidth: 1
    },
    Box1 : {
        width: 50,
        height: 50,
        margin: 10,
        backgroundColor : "yellow",
        // overflow:"hidden"
    },
    Box2 : {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor : "green"
    },
    Box3 : {
        width: 300,
        height: 300,
        margin: 10,
        backgroundColor : "blue"
    },
    Box4 : {
        width: 500,
        height: 500,
        margin: 10,
        backgroundColor : "orange"
    }
})