
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
/**
首页
**/
export default class FriendView extends Component{

  render(){
    return(
      <View style={styles.container}>
      <Text>博客</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
