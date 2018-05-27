import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import QiitaItemComponent from './QiitaItemComponent';

export default class QiitaItemsListComponent extends Component {
  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => item.id;
  render() {
    const { data, navigator } = this.props;
    return (
      <FlatList
        data={data}
        extraData={data}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <QiitaItemComponent item={item} navigator={navigator} />}
        style={styles.flatList}
      />
    );
  }
}

// 各種デザイン要素
var styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#FFFFFF',
    paddingTop: 44,
  },
});