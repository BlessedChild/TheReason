import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>我留在这里的理由</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
  },
  button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
  },
  countContainer: {
      alignItems: 'center',
      padding: 10
  },
  countText: {
      color: '#FF00FF'
  }
})