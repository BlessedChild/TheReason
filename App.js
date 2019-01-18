/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, SafeAreaView } from 'react-native';

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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View>
            <TopBar1>
            </TopBar1>
          </View>
          <View>
            <TopBar2></TopBar2>
          </View>
          <View style={styles.mainPage}>
            <FetchInfo>
            </FetchInfo>
          </View>
          <View>
            <Bottom></Bottom>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  mainPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});
