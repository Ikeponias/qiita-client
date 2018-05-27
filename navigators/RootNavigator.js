import React, { Component } from 'react';
import { 
    NavigatorIOS,
    StyleSheet,
} from 'react-native';

import QiitaItemsListContainer from '../containers/QiitaItemsListContainer';

export default class RootNavigator extends Component {
    render() {
        return (
            <NavigatorIOS
                style={ styles.navigator }
                initialRoute={{
                    component: QiitaItemsListContainer,
                    title: 'ReactQiita',
                }}
            />
        );
    }
}

// 各種デザイン要素
var styles = StyleSheet.create({
    navigator: {
      flex: 1
    },
});