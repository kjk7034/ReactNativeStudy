import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    TextInput
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            behavior : "padding"
        }
    }
    behaviorChange(state){
        if(this.state.behavior === state) {
            return false
        }
        this.setState({
            behavior : state
        })
    }
    render() {
        return (
            <Wrapper title="KeyboardAvoidingView 예제" {...this.props}>
                <KeyboardAvoidingView behavior={this.state.behavior} contentContainerStyle={Style.keyboardWrap} style={Style.keyboardWrap}>
                    <ScrollView style={Style.Contents}>
                        <View style={Style.btns}>
                            <TouchableOpacity style={[Style.stateBtn, this.state.behavior === "padding" ? Style.stateBtnOn : null]} onPress={()=>this.behaviorChange("padding")} activeOpacity={0.65}>
                                <Text style={Style.PrevBtnText}>padding</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Style.stateBtn, this.state.behavior === "position" ? Style.stateBtnOn : null]} onPress={()=>this.behaviorChange("position")} activeOpacity={0.65}>
                                <Text style={Style.PrevBtnText}>position</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Style.Item}>
                            <TextInput placeholder="<TextInput - 1 />" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <TextInput placeholder="<TextInput - 2 />" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <TextInput placeholder="<TextInput - 3 />" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <TextInput placeholder="<TextInput - 4 />" style={Style.textInput} />
                        </View>
                        <View style={Style.Item}>
                            <TextInput placeholder="<TextInput - 5 />" style={Style.textInput} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Wrapper>


        )
    }
}
