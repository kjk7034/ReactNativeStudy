import React, {Component} from 'react';
import {
    View,
    Text,
    MapView
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
            <Wrapper title="MapView 예제" {...this.props}>
                <MapView
                    style={Style.Contents}
                    showsUserLocation={true}
                    annotations = {[
                        {
                            longitude: 127.1163593869371,
                            latitude: 37.40209529907863,
                            title: 'Welcome',
                        }
                    ]}
                />
            </Wrapper>
        )
    }
}