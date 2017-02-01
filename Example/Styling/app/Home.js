import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import {Wrapper} from './Wrapper';

class ComponentItem extends Component {
    render(){
        return (
            <View style={styles.Item}>
                <TouchableOpacity onPress={()=>this.props.navigator.push({"name":this.props.name, "title":this.props.title})} activeOpacity={0.65}>
                    <Text style={styles.BtnText}>{this.props.title}</Text>
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
            <Wrapper title="React Native Styling 샘플" popBtn="off">
                <ScrollView style={styles.Contents}>
                    <ComponentItem title="Style 예제 - import" name="StyleEx1" {...this.props} />
                    <ComponentItem title="Style 예제 - inline" name="StyleEx2" {...this.props} />
                    <ComponentItem title="Style 예제 - 변수활용, 스타일 상속" name="StyleEx3" {...this.props} />
                    <ComponentItem title="Height and Width 예제" name="HeightWidth" {...this.props} />
                    <ComponentItem title="flex 영역 예제" name="LayoutwithFlexbox1" {...this.props} />
                    <ComponentItem title="flexDirection 예제" name="LayoutwithFlexbox2" {...this.props} />
                    <ComponentItem title="justifyContent 예제" name="LayoutwithFlexbox3" {...this.props} />
                    <ComponentItem title="alignItems 예제" name="LayoutwithFlexbox4" {...this.props} />
                </ScrollView>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    Contents : {
        flex : 1,
        padding:10
    },
    Item : {
        borderWidth:1,
        borderRadius:5,
        padding:7,
        marginBottom:10
    },
    BtnText: {
        color: "#000",
        fontSize: 16
    }
})