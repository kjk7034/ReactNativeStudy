import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Modal,
    ScrollView
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible : false
        }
    }
    modalToggle(){
        this.setState({
            modalVisible : !this.state.modalVisible
        })
    }
    render() {
        return (
            <Wrapper title="Modal 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Item}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text>내용</Text>
                    </View>
                    <TouchableOpacity style={Style.Btn} onPress={() => this.modalToggle()}>
                        <Text>Show Modal 버튼</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={Style.modal}>
                        <Text>Hello World!</Text>
                        <TouchableOpacity style={Style.Btn} onPress={() => this.modalToggle()}>
                            <Text>Hide Modal 버튼</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Wrapper>
        )
    }
}