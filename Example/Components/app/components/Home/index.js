import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

import {Wrapper} from './../Layout';
import {Style} from './style';
import {navPush} from '../../helper/navigator';

class ComponentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <View style={Style.Item}>
                <TouchableOpacity style={Style.Btn} onPress={()=>navPush(this.props.navigator,{"name":this.props.name})} activeOpacity={0.65}>
                    <Text style={Style.BtnText}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Wrapper title="React Native COMPONENTS" popBtn="off">
                <ScrollView style={Style.Contents}>
                    <ComponentItem name="ActivityIndicator" {...this.props} />
                    <ComponentItem name="Image" {...this.props} />
                    <ComponentItem name="KeyboardAvoidingView" {...this.props} />
                    <ComponentItem name="ListView" {...this.props} />
                    <ComponentItem name="MapView" {...this.props} />
                    <ComponentItem name="Modal" {...this.props} />
                    <ComponentItem name="Navigator" {...this.props} />
                    <ComponentItem name="Picker" {...this.props} />
                    <ComponentItem name="RefreshControl" {...this.props} />
                    <ComponentItem name="ScrollView" {...this.props} />
                    <ComponentItem name="Slider" {...this.props} />
                    <ComponentItem name="StatusBar" {...this.props} />
                    <ComponentItem name="Switch" {...this.props} />
                    <ComponentItem name="Text" {...this.props} />
                    <ComponentItem name="TextInput" {...this.props} />
                    <ComponentItem name="TouchableHighlight" {...this.props} />
                    <ComponentItem name="TouchableOpacity" {...this.props} />
                    <ComponentItem name="TouchableWithoutFeedback" {...this.props} />
                    <ComponentItem name="View" {...this.props} />
                    <ComponentItem name="WebView" {...this.props} />
                </ScrollView>
            </Wrapper>
        )
    }
}



