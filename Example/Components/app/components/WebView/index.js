import React, {Component} from 'react';
import {
    View,
    Text,
    WebView,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backButtonEnabled : false,
            forwardButtonEnabled : false,
            url : 'http://wagunblog.com/wp',
            title : 'No Page Loaded',
            loading : true,
            scalesPageToFit : true
        }
        this.inputText = '';
    }
    handleTextInputChange = (event) => {
        var url = event.nativeEvent.text;
        if (!/^[a-zA-Z-_]+:/.test(url)) {
            url = 'http://' + url;
        }
        this.inputText = url;
    };
    render() {
        this.inputText = this.state.url;
        return (
            <Wrapper title="WebView 예제" {...this.props}>
                <View style={[Style.container]}>
                    <View style={[Style.addressBarRow]}>
                        <TouchableOpacity
                            onPress={this.goBack}
                            style={this.state.backButtonEnabled ? Style.navButton : Style.disabledButton}>
                            <Text>
                                {'<'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.goForward}
                            style={this.state.forwardButtonEnabled ? Style.navButton : Style.disabledButton}>
                            <Text>
                                {'>'}
                            </Text>
                        </TouchableOpacity>
                        <TextInput
                            ref={'urlInput'}
                            autoCapitalize="none"
                            defaultValue={this.state.url}
                            onSubmitEditing={this.onSubmitEditing}
                            onChange={this.handleTextInputChange}
                            clearButtonMode="while-editing"
                            style={Style.addressBarTextInput}
                        />
                        <TouchableOpacity onPress={this.pressGoButton}>
                            <View style={Style.goButton}>
                                <Text>
                                    Go!
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <WebView
                        ref={'webview'}
                        automaticallyAdjustContentInsets={false}
                        style={Style.webView}
                        source={{uri: this.state.url}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                        onNavigationStateChange={this.onNavigationStateChange}
                        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                        startInLoadingState={true}
                        scalesPageToFit={this.state.scalesPageToFit}
                    />
                    <View style={Style.statusBar}>
                        <Text style={Style.statusBarText}>{this.state.status}</Text>
                    </View>
                </View>
            </Wrapper>
        )
    }
    goBack = () => {
        this.refs['webview'].goBack();
    };

    goForward = () => {
        this.refs['webview'].goForward();
    };

    reload = () => {
        this.refs['webview'].reload();
    };

    onShouldStartLoadWithRequest = (event) => {
        // Implement any custom loading logic here, don't forget to return!
        return true;
    };

    onNavigationStateChange = (navState) => {
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            url: navState.url,
            status: navState.title,
            loading: navState.loading,
            scalesPageToFit: true
        });
    };

    onSubmitEditing = (event) => {
        this.pressGoButton();
    };

    pressGoButton = () => {
        var url = this.inputText.toLowerCase();
        if (url === this.state.url) {
            this.reload();
        } else {
            this.setState({
                url: url,
            });
        }
        // dismiss keyboard
        this.refs['urlInput'].blur();
    };
}