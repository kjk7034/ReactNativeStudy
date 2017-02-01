import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
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
            <Wrapper title="TouchableOpacity 예제" {...this.props}>
                <View style={Style.CenterView}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={(e)=>{
                            console.log("onPress")
                        }}
                    >
                        <View style={Style.Btn}>
                            <Image
                                source={require('./../../resource/images/wisePhoto.jpeg')}
                                style={{width: 200, height: 80}}
                            />
                            <Text style={{marginTop: 10}}>TouchableOpacity : 0.7 example</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text>activeOpacity default는 0.2</Text>
                    </View>
                </View>
            </Wrapper>
        )
    }
}