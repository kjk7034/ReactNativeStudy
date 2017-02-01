import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView
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
            <Wrapper title="ActivityIndicator 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Item}>
                        <Text>1. animating = false</Text>
                        <ActivityIndicator animating={false} />
                    </View>
                    <View style={Style.Item}>
                        <Text>2. default - not props</Text>
                        <ActivityIndicator />
                    </View>
                    <View style={Style.Item}>
                        <Text>3. size - small</Text>
                        <ActivityIndicator size="small" />
                    </View>
                    <View style={Style.Item}>
                        <Text>4. size - large</Text>
                        <ActivityIndicator size="large" />
                    </View>
                    <View style={Style.Item}>
                        <Text>5. color - red</Text>
                        <ActivityIndicator color="red" />
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}