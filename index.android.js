/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import CustomViewPager from './CustomViewPager';
import ViewPagerInAndroid from './ViewPagerInAndroid';

class wangyi extends Component {

  render(){
    return (
      <ViewPagerInAndroid/>
    );
  }
}

AppRegistry.registerComponent('wangyi', () => wangyi);
