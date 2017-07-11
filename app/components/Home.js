import React, { Component } from 'react';
import { View,
        StyleSheet
      } from 'react-native';
import Search from './Search';
import Display from './Display';


export default class Home extends Component {
  render() {
    return (
      <View style={ style.container }>
        <Display style={ style.display }/>
        <Search style={ style.search }/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },
  search: {
    flex: 1,
  },
  display: {
    flex: 3,
  }
});
