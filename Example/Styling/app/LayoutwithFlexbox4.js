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
                        <Text style={styles.Text}>alignItems : "flex-start"</Text>
                        <View style={[styles.DirectionColumn, { alignItems : "flex-start" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>alignItems : "center"</Text>
                        <View style={[styles.DirectionColumn, { alignItems : "center" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>alignItems : "flex-end"</Text>
                        <View style={[styles.DirectionColumn, { alignItems : "flex-end" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>alignItems : "stretch"</Text>
                        <View style={[styles.DirectionColumn, { alignItems : "stretch" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "column"</Text>
                        <Text style={styles.Text}>alignItems : "stretch"</Text>
                        <Text style={styles.Text}>flexDirection가 row인 경우 width가 고정값이 아니면...</Text>
                        <View style={[styles.DirectionColumn, { alignItems : "stretch" }]}>
                            <View style={[styles.ViewBox3, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox3, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox3, styles.BoxColor3]}></View>
                        </View>
                    </View>

                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>alignItems : flex-start</Text>
                        <View style={[styles.DirectionRow, , { alignItems : "flex-start" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>alignItems : "center"</Text>
                        <View style={[styles.DirectionRow, , { alignItems : "center" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>alignItems : "flex-end"</Text>
                        <View style={[styles.DirectionRow, , { alignItems : "flex-end" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>alignItems : "stretch"</Text>
                        <View style={[styles.DirectionRow, , { alignItems : "stretch" }]}>
                            <View style={[styles.ViewBox, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox, styles.BoxColor3]}></View>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.Text}>flexDirection : "row"</Text>
                        <Text style={styles.Text}>alignItems : "stretch"</Text>
                        <Text style={styles.Text}>flexDirection가 row인 경우 height가 고정값이 아니면...</Text>
                        <View style={[styles.DirectionRow, , { alignItems : "stretch" }]}>
                            <View style={[styles.ViewBox2, styles.BoxColor1]}></View>
                            <View style={[styles.ViewBox2, styles.BoxColor2]}></View>
                            <View style={[styles.ViewBox2, styles.BoxColor3]}></View>
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
