import React, {Component} from 'react';
import {
    Text,
    View,
    Navigator
} from 'react-native';

import Home from './Home'
import StyleEx1 from './StyleEx1'
import StyleEx2 from './StyleEx2'
import StyleEx3 from './StyleEx3'
import HeightWidth from './HeightWidth'
import LayoutwithFlexbox1 from './LayoutwithFlexbox1'
import LayoutwithFlexbox2 from './LayoutwithFlexbox2'
import LayoutwithFlexbox3 from './LayoutwithFlexbox3'
import LayoutwithFlexbox4 from './LayoutwithFlexbox4'

const routes = {
    Home : Home,
    StyleEx1 : StyleEx1,
    StyleEx2 : StyleEx2,
    StyleEx3 : StyleEx3,
    HeightWidth : HeightWidth,
    LayoutwithFlexbox1 : LayoutwithFlexbox1,
    LayoutwithFlexbox2 : LayoutwithFlexbox2,
    LayoutwithFlexbox3 : LayoutwithFlexbox3,
    LayoutwithFlexbox4 : LayoutwithFlexbox4
}

export class App extends Component {
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
            <Navigator {...navigatorProps} />
    );
    }
}