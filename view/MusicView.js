
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
export default class MusicView extends Component{

  render(){
    return(
      <View style={styles.container}>
      <Text>音乐</Text>
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
