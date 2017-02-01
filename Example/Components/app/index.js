import React, {Component} from 'react';
import {
    Text,
    View,
    Navigator
} from 'react-native';

import HomeComponent from './components/Home'
import ActivityIndicatorComponent from './components/ActivityIndicator'
import ImageComponent from './components/Image'
import KeyboardAvoidingViewComponent from './components/KeyboardAvoidingView'
import ListViewComponent from './components/ListView'
import MapViewComponent from './components/MapView'
import ModalComponent from './components/Modal'
import NavigatorComponent from './components/Navigator'
import PickerComponent from './components/Picker'
import RefreshControlComponent from './components/RefreshControl'
import ScrollViewComponent from './components/ScrollView'
import SliderComponent from './components/Slider'
import StatusBarComponent from './components/StatusBar'
import SwitchComponent from './components/Switch'
import TextComponent from './components/Text'
import TextInputComponent from './components/TextInput'
import TouchableHighlightComponent from './components/TouchableHighlight'
import TouchableOpacityComponent from './components/TouchableOpacity'
import TouchableWithoutFeedbackComponent from './components/TouchableWithoutFeedback'
import ViewComponent from './components/View'
import WebViewComponent from './components/WebView'
import CodePushComponent from './components/CodePush'

const routes = {
    Home : HomeComponent,
    ActivityIndicator : ActivityIndicatorComponent,
    Image : ImageComponent,
    KeyboardAvoidingView : KeyboardAvoidingViewComponent,
    ListView : ListViewComponent,
    MapView : MapViewComponent,
    Modal : ModalComponent,
    Navigator : NavigatorComponent,
    Picker : PickerComponent,
    RefreshControl : RefreshControlComponent,
    ScrollView : ScrollViewComponent,
    Slider : SliderComponent,
    StatusBar : StatusBarComponent,
    Switch : SwitchComponent,
    Text : TextComponent,
    TextInput : TextInputComponent,
    TouchableHighlight : TouchableHighlightComponent,
    TouchableOpacity : TouchableOpacityComponent,
    TouchableWithoutFeedback : TouchableWithoutFeedbackComponent,
    View : ViewComponent,
    WebView : WebViewComponent,
}

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const navigatorProps = {
            initialRoute: {name:"Home"},
            renderScene: (route, navigator) => {
                const Component = routes[route.name];
                return <Component route={route} navigator={navigator} />
            },
            configureScene : (route)=>{
                return Navigator.SceneConfigs[route.sceneConfig] || Navigator.SceneConfigs.PushFromRight;
            }
        }
        return (
            <View style={{flex:1}}>
                <Navigator {...navigatorProps} />
                <CodePushComponent />
            </View>
        );
    }
}