import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.topTitleText}>我留在这里的理由</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    textAlign: 'center',
    height:48
  },
  topTitleText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 36,
    fontWeight: '900'
  }
})