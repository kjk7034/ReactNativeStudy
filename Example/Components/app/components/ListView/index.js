import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ListView,
    ActivityIndicator
} from 'react-native';

import {Style} from './style';
import {Wrapper} from './../Layout';

function datas (page=0) {
    let sampleArray = [];
    for(let i = 0; i < 10; i ++) {
        const idx = i + parseInt(page*10);
        sampleArray.push({"name": "Array = " + idx + " !!"});
    }
    return sampleArray;
}
export default class extends Component {
    constructor(props) {
        super(props);
        this._page = 0;
        this._dataArray = [];
        this.state = {
            hasMore : true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => {
                    console.log("row1, row2", row1, row2)
                    return row1 !== row2
                }
            })
        };
    }
    componentDidMount() {
        this.getRow()
    }
    getRow(){
        if(this._page > 3) {
            // return false
            return this.setState({
                hasMore: false
            })
        }
        this._dataArray = this._dataArray.concat(datas(this._page));
        this._page += 1;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this._dataArray)
        })
    }
    renderRow (data, sectionId, rowID){
        //console.log("data, sectionId, rowID", data, sectionId, rowID)
        return (
            <View style={{padding: 5, borderWidth: 1, borderColor: "#000", margin: 10}}>
                <Text style={{marginRight: 15}}>sectionId : {sectionId}</Text>
                <Text style={{marginRight: 15}}>rowID : {rowID}</Text>
                <Text style={{marginRight: 15}}>data.name : {data.name}</Text>
            </View>
        )
    }
    endGetData() {
        if(!this.state.hasMore) {
            return false
        }
        this.getRow()
    }
    renderFooter(){
        if(!this.state.hasMore) {
            return false
        }
        return <ActivityIndicator size="large" />;
    }
    rowDelete(){
        let newDataArray = this._dataArray.slice();
        newDataArray.splice(5,1);
        this._dataArray = newDataArray;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this._dataArray)
        })
    }
    render() {
        return (
            <Wrapper title="ListView 예제" {...this.props}>
                <ListView
                    dataSource={this.state.dataSource}
                    onEndReached={() => this.endGetData()}
                    onEndReachedThreshold={200}
                    renderFooter={this.renderFooter.bind(this)}
                    renderRow={this.renderRow}
                />
                <View style={Style.chageDataView}>
                    <TouchableOpacity style={Style.BtnChageData} onPress={()=>this.rowDelete()} activeOpacity={0.65}>
                        <Text style={Style.PrevBtnText}>5번째 데이터 삭제</Text>
                    </TouchableOpacity>
                </View>
            </Wrapper>
        )
    }
}