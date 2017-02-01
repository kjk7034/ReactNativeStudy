import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Wrapper title="TouchableWithoutFeedback 예제" {...this.props}>
                <View style={Style.CenterView}>
                    <TouchableWithoutFeedback
                        onPress={(e)=>{
                            console.log("onPress")
                        }}
                    >
                        <View style={Style.Btn}><Text>TouchableWithoutFeedback</Text></View>
                    </TouchableWithoutFeedback>
                </View>
            </Wrapper>
        )
    }
}