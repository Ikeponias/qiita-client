import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import QiitaItemViewComponent from './QiitaItemViewComponent';

export default class QiitaItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  onPressed() {
    const { item, navigator } = this.props;
    navigator.push({
      title: item.title,
      component: QiitaItemViewComponent,
      passProps: { url: item.url },
    });
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressed(item)}>
        <View style={styles.item}>
          <Image
            source={{ uri: item.user.profile_image_url }}
            style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.name}>{item.user.id}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// 各種デザイン要素
var styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    margin: 8,
    textAlign: 'left',
  },
  name: {
    fontSize: 12,
    margin: 8,
    textAlign: 'left',
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 2,
  },
});