import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TopBar2 extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressLearnMore = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <Text style={styles.buttonTitleText}>今日理由</Text>
          <Text style={styles.buttonTitleText}>社区        </Text>
          <Text style={styles.buttonTitleText}>活动        </Text>
        </View>
        <View style={styles.separationLine}></View>
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
    backgroundColor: '#f2f2f2'
  }
})