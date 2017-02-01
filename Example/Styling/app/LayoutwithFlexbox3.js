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
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>justifyContent : "flex-start"</Text>
                        <View style={[styles.DirectionColumn, { justifyContent : "flex-start" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>justifyContent : "center"</Text>
                        <View style={[styles.DirectionColumn, { justifyContent : "center" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>justifyContent : "flex-end"</Text>
                        <View style={[styles.DirectionColumn, { justifyContent : "flex-end" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>justifyContent : "space-around"</Text>
                        <View style={[styles.DirectionColumn, { justifyContent : "space-around" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>justifyContent : "space-between"</Text>
                        <View style={[styles.DirectionColumn, { justifyContent : "space-between" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>justifyContent : "flex-start"</Text>
                        <View style={[styles.DirectionRow, , { justifyContent : "flex-start" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>justifyContent : "center"</Text>
                        <View style={[styles.DirectionRow, , { justifyContent : "center" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>justifyContent : "flex-end"</Text>
                        <View style={[styles.DirectionRow, , { justifyContent : "flex-end" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>justifyContent : "space-around"</Text>
                        <View style={[styles.DirectionRow, , { justifyContent : "space-around" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>justifyContent : "space-between"</Text>
                        <View style={[styles.DirectionRow, , { justifyContent : "space-between" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
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
        padding:15
    },
    Item : {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1
    },
    Text : {
        fontSize : 18,
        marginBottom: 5
    },
    DirectionRow : {
        flexDirection : "row",
        backgroundColor : "#fff",
        flex: 1,
        height: 120,

    },
    DirectionColumn : {
        flexDirection : "column",
        backgroundColor : "#fff",
        flex: 1,
        height: 120,
    },
    ViewBox : {
        width: 30,
        height: 30
    },
    ViewBox2 : {
        width : 30
    },
    ViewBox3 : {
        height : 30
    },
    BoxColor1 : {
        backgroundColor: "red"
    },
    BoxColor2 : {
        backgroundColor: "orange"
    },
    BoxColor3 : {
        backgroundColor: "skyblue"
    }
})