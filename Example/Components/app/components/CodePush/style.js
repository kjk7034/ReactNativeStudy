import React, {
    StyleSheet
} from 'react-native';

export const Style = StyleSheet.create({
    Wrapper: {
        backgroundColor: '#3b5999',
        flex:1,
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleWrap : {
        marginTop:10
    },
    Title : {
        color:'#fff',
        fontSize: 16
    },
    percentWrap : {
        width:144,
        height:144,
        borderRadius:72,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    percent : {
        fontWeight: 'bold',
        fontSize: 20
    }
})



