import React, {
    StyleSheet
} from 'react-native';

export const Style = StyleSheet.create({
    keyboardWrap : {
        flex:1,
        justifyContent : "center",
    },
    Contents : {
        flex : 1,
        padding:10
    },
    btns : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent : "center",
        padding: 40,
        marginBottom: 200
    },
    stateBtn : {
        height:30,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:"#fff",
        paddingHorizontal:10,
        justifyContent:"center",
        marginHorizontal : 10
    },
    stateBtnOn : {
        backgroundColor : "pink"
    },
    Item : {
        padding: 30,
        borderTopWidth: 1
    },
    textInput : {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
        color : "#000",
        marginTop: 10,
        fontSize : 18
    },
})



