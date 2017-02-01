import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import {styles} from './Wrapper.style';

export class Wrapper extends Component {
    render() {
        return (
            <View style={styles.Wrapper}>
                <View style={styles.Header}>
                    <Text style={styles.Title}>{this.props.route ? this.props.route.title : this.props.title}</Text>
                    {this.props.popBtn === "off" ? null : (
                        <View style={styles.PrevBtnWrap}>
                            <TouchableOpacity style={styles.PrevBtn} onPress={()=>this.props.navigator.pop()} activeOpacity={0.65}>
                                <Text style={styles.PrevBtnText}>이전</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                {this.props.children}
            </View>
        )
    }
}