/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ListView,
  Platform,
  BackAndroid,
  ToolbarAndroid,
} from 'react-native';

import MenuList from './MenuList';

import TitleBar from './view/TitleBar';
import HomeView from './view/HomeView';
import MusicView from './view/MusicView';
import FriendView from './view/FriendView';

import ViewPager from 'react-native-viewpager';

const PAGES=['HOME','MUSIC','FRIEND'];


class CustomViewPager extends Component {

     constructor(){
       super();
       var ds=new ViewPager.DataSource({pageHasChanged:(p1,p2)=>p1!==p2});
       this.state={
        isMenuOpen:false,
        tabIndex:1,
        dataSource:ds.cloneWithPages(PAGES),
       }
     }

   /**
   定义menu回调方法 position 下标
   **/
   onMenuItem(position){
    alert(position);
   }

   componentDidMount(){

   }

   componentWillMount(){
      //因为本文件是安卓，所以不需要改判断
      if(Platform.OS==='android'){
       BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid.bind(this));
      }
   }
   componentWillUnmount(){

     //因为本文件是安卓，所以不需要改判断
     if(Platform.OS==='android'){
     BackAndroid.removeEventListener('hardwareBackPress',this.onBackAndroid.bind(this));
     }
   }

   /**
   返回true,不进行退出，返回false 退出
   **/
   onBackAndroid(){
     if(!this.state.isMenuOpen){
       return false;
     }else{
       this.refs.drawer.closeDrawer();
       return true;
     }
   }
  /**
  点击下标(1,2,3,4,5)
  **/
  onSelectItem(position){
   switch (position) {
     case 1:
      this.refs.drawer.openDrawer();
       break;
     case 2:
      this.setState({tabIndex:0});
       break;
     case 3:
     this.setState({tabIndex:1});
     this.refs.ViewPager.goToPage(1,true);
       break;
     case 4:
     this.setState({tabIndex:2});
       break;
     case 5:

       break;
     default:
   }
  }

  renderPage(data,pageID){
      if(pageID==0){
        return (<HomeView/>);
      }else if(pageID==1){
        return (<MusicView/>);
      }else if(pageID==2){
        return (<FriendView/>);
      }

  }
   //这里想要获取到this,则需要前面绑定
  onChangePage(pageNumber){
     this.setState({tabIndex:pageNumber});
  }

  render() {
    //这里可以理解为传入的是onSelectItem的引用，至于参数则由真正的调用者传递
     var navigationView =(
      <MenuList
      onMenuItem={this.onMenuItem.bind(this)}
      />
     );
    return (
        <DrawerLayoutAndroid
         ref='drawer'
         drawerWidth={300}
         drawerPosition={DrawerLayoutAndroid.positions.Left}
         renderNavigationView={()=>navigationView}
         onDrawerOpen={()=>this.setState({isMenuOpen:true})}
         onDrawerClose={()=>this.setState({isMenuOpen:false})}
        >
        <View style={{flex:1}}>
        <TitleBar
         onSelectItem={this.onSelectItem.bind(this)}
         onCurrentIndex={this.state.tabIndex}
        />

        <ViewPager
         ref='ViewPager'
         style={{flex:1}}
         dataSource={this.state.dataSource}
         renderPage={this.renderPage}
         renderPageIndicator={false}
         isLoop={false}
         onChangePage={this.onChangePage.bind(this)}
        />
        </View>

        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
