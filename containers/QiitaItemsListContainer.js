import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import QiitaItemsListComponent from '../components/QiitaItemsListComponent';

const QIITA_URL
  = "https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=8";

export default class QiitaItemsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: null,
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  renderLoadingView() {
    return (
      <Text>
        Loading Movies...
      </Text>
    );
  }

  fetchData() {
    fetch(QIITA_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
          loaded: true,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      this.state.loaded ?
        <QiitaItemsListComponent
          data={this.state.items}
          navigator={this.props.navigator}
        /> :
        this.renderLoadingView()
    );
  }
}
