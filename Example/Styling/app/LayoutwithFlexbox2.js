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
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <View style={styles.DirectionRow}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <View style={styles.DirectionColumn}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : 섞어서..</Text>
                        <View style={styles.DirectionRow}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={styles.DirectionColumn}>
                                <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                                <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                                <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                            </View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
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
    Item : {
        padding: 10
    },
    Text : {
        fontSize : 18,
        marginBottom: 5
    },
    DirectionRow : {
        flexDirection : "row"
    },
    DirectionColumn : {
        flexDirection : "column"
    },
    ViewBox : {
        width: 40,
        height: 40
    },
    BoxColor1 : {
        backgroundColor: "#fff"
    },
    BoxColor2 : {
        backgroundColor: "orange"
    },
    BoxColor3 : {
        backgroundColor: "skyblue"
    }
})
