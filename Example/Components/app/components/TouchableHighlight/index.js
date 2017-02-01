import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
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
            <Wrapper title="TouchableHighlight 예제" {...this.props}>
                <View style={Style.CenterView}>
                    <TouchableHighlight
                        style={Style.Btn}
                        activeOpacity={0.5} // 클릭시 Opacity
                        onHideUnderlay={(e)=>{
                            console.log("onHideUnderlay")
                        }}
                        onPress={(e)=>{
                            console.log("onPress")
                        }}
                        onShowUnderlay={(e)=>{
                            console.log("onShowUnderlay")
                        }}
                        underlayColor="red" // 기본은 검은색
                    >
                        <Text style={Style.textInfo}>TouchableHighlight</Text>
                    </TouchableHighlight>
                    <View>
                        <Text>Highlight 변경. (underlayColor)</Text>
                    </View>
                </View>
            </Wrapper>
        )
    }
}