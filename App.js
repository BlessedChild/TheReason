/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// 导入我自己写的组件
import Bottom from './App/Components/Bottom/index.ios';
import Arthur from './App/Components/ShowArthur/index.ios';
import TopBar1 from './App/Components/TopBar/TopBar1/index.ios';
import TopBar2 from './App/Components/TopBar/TopBar2/index.ios';
import TouchBar1 from './App/Components/TouchableHighlight/index.ios';
import FetchInfo from './App/Components/Network/Api';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top1}>
          <TopBar1></TopBar1>
        </View>
        <View style={styles.top2}>
          <TopBar2></TopBar2>
        </View>
        <View style={styles.mainPage}>
          <Arthur></Arthur>
          <TouchBar1></TouchBar1>
        </View>
        <View style={styles.bottom}>
          <Bottom></Bottom>
        </View>
        <FetchInfo></FetchInfo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '92%'
  },
  top1: {
    marginTop: 48,
    height: 48,
    backgroundColor: 'green'
  },
  top2: {
    height: 48,
    backgroundColor: 'red'
  },
  mainPage: {

  },
  bottom: {
    height: 48,
    backgroundColor: 'green'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
