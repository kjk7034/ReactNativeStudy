import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import {Style} from './style';
import {navPop} from '../../helper/navigator';

export class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={Style.Wrapper}>
                <View style={Style.Header}>
                    <Text style={Style.Title}>{this.props.title}</Text>
                    {this.props.popBtn === "off" ? null : (
                        <View style={Style.PrevBtnWrap}>
                            <TouchableOpacity style={Style.PrevBtn} onPress={()=>navPop(this.props.navigator)} activeOpacity={0.65}>
                                <Text style={Style.PrevBtnText}>이전</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                {this.props.children}
            </View>
        )
    }
}