import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

class ImageCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        const newProps = Object.assign({
            source : {uri : "https://avatars1.githubusercontent.com/u/6457068?v=3&s=466"},
            style : {width: 200, height: 80}
        }, this.props)
        return (
            <Image {...newProps} />
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
            <Wrapper title="Image 예제" {...this.props}>
                <ScrollView style={Style.Contents}>
                    <View style={Style.Item}>
                        <Text>1. 로컬 파일 (require)</Text>
                        <ImageCustom
                            source={require('./../../resource/images/wisePhoto.jpeg')}
                        />
                    </View>
                    <View style={Style.Item}>
                        <Text>2. 나머진 모두 uri, 이미지 크기 460,460 (현재 컴포넌트 200, 80) </Text>
                        <ImageCustom
                            onLayout={(e)=> {
                                console.log("onLayout", e.nativeEvent)
                            }}
                            onLoadStart={(e)=> {
                                console.log("onLoadStart", e.nativeEvent)
                            }}
                            onLoad={(e)=> {
                                console.log("onLoad", e.nativeEvent)
                            }}
                            onLoadEnd={(e)=> {
                                console.log("onLoadEnd", e.nativeEvent)
                            }}
                        />
                    </View>
                    <View style={Style.Item}>
                        <Text>3. resizeMode : cover </Text>
                        <ImageCustom resizeMode="cover" />
                    </View>
                    <View style={Style.Item}>
                        <Text>4. resizeMode : contain </Text>
                        <ImageCustom resizeMode="contain" />
                    </View>
                    <View style={Style.Item}>
                        <Text>5. resizeMode : stretch </Text>
                        <ImageCustom resizeMode="stretch" />
                    </View>
                    <View style={Style.Item}>
                        <Text>6. resizeMode : center </Text>
                        <ImageCustom resizeMode="center" />
                    </View>
                    <View style={Style.Item}>
                        <Text>7. resizeMode : repeat - iOS only </Text>
                        <ImageCustom resizeMode="repeat" />
                    </View>
                </ScrollView>
            </Wrapper>
        )
    }
}
