import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.separationLine}></View>
        <View style={styles.bar}>
          <Text style={styles.buttonTitleText}>主页</Text>
          <Text style={styles.buttonTitleText}>消息中心</Text>
          <Text style={styles.buttonTitleText}>我的</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    textAlign: 'center'
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    paddingHorizontal: '4%',
    height: 48
  },
  buttonTitleText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 36,
    fontWeight: '300'
  },
  separationLine: {
    height: 0.5,
    backgroundColor: '#d9d9d9'
  }
})