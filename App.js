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
// import Arthur from './App/Components/ShowArthur/index.ios';
import TopBar1 from './App/Components/TopBar/TopBar1/index.ios';
import TopBar2 from './App/Components/TopBar/TopBar2/index.ios';
// import TouchBar1 from './App/Components/TouchableHighlight/index.ios';
import FetchInfo from './App/Components/Network/Api';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 内容页面默认每次Post请求服务器数据为11条
// 当上拉触发Post请求时，向服务器请求11条数据，页面增加11条数据
// 当下拉触发Post请求时，向服务器请求最新的11条数据，或者
// 与当前页面不重复的最新的11条数据，页面刷新当前的11条数据

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top1}>
          <TopBar1>
            <img src="./Database/1.jpg"></img>
          </TopBar1>
        </View>
        <View style={styles.top2}>
          <TopBar2></TopBar2>
        </View>
        <View style={styles.mainPage}>
          <FetchInfo></FetchInfo>
        </View>
        <View style={styles.bottom}>
          <Bottom></Bottom>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'stretch'
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
    marginBottom: 5
  },
});
