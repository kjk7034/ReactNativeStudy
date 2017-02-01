import React, {Component} from 'react';
import {
    View,
    Text,
    RefreshControl,
    ScrollView,
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing : false
        }
    }
    onRefresh (){
        this.setState({
            isRefreshing: true
        });
        // 원하는 액션을 하고 isRefreshing을 false로...
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 1000);
    };
    render() {
        return (
            <Wrapper title="RefreshControl 예제" {...this.props}>
                <ScrollView
                    style={Style.Contents}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                    <View style={Style.Item}>
                        <Text style={Style.Text}>내용</Text>
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}