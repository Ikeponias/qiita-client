import React from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';

import RootNavigator from './navigators/RootNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 33,
  },
});
