
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  BackAndroid,
} from 'react-native';


const MENU=['我的消息','积分商城','会员中心','在线听歌免流量','听歌识曲','主题换肤','夜间模式','定时停止播放','音乐闹钟','驾驶模式'];

export default class MenuList extends Component{
  constructor(){
    super();
     var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});

     this.state={
       dataSource:ds.cloneWithRows(MENU),
     }
  }



  renderHeader(){
    return(
      //切记：height：null width:null 要设置,否则height width会图片原有的宽度


      <Image resizeMode='cover' style={styles.head}
      source={require('./images/topinfo_ban_bg.jpg')}>

      <View style={styles.headText}>
       <Text style={{color:'#e3e3e2'}}>登陆网易云音乐</Text>
       <Text style={{color:'#e3e3e2',marginTop:5}}>320K高音质无限下载,手机电脑多端同步</Text>
      </View>

      <TouchableOpacity activeOpacity={0.5} style={{marginTop:20}} onPress={()=>console.log()}>
      <View style={styles.login}>
       <Text style={{color:'#fff'}}>立即登录</Text>
      </View>
      </TouchableOpacity>

      </Image>




    );
  }

  renderRow(data,sectionID,rowID){
    var image;

    switch (rowID) {
      case '0':
        image=require('image!opmenu_icn_msg');
        break;
     case '1':
        image=require('image!topmenu_icn_store');
      break;
     case '2':
       image=require('image!topmenu_icn_member');
      break;
     case '3':
      image=require('image!topmenu_icn_free');
     break;
     case '4':
      image=require('image!topmenu_icn_identify');
     break;
     case '5':
      image=require('image!topmenu_icn_skin');
     break;
     case '6':
        image=require('image!topmenu_icn_night');
     break;
     case '7':
        image=require('image!topmenu_icn_time');
     break;
     case '8':
        image=require('image!topmenu_icn_clock');
     break;
     case '9':
        image=require('image!topmenu_icn_vehicle');
     break;
      default:
    }

    return(
      <View style={{flex:1}}>
      <TouchableHighlight underlayColor='#ddd' onPress={()=>this.onSelectItem(rowID)}>
      <View style={styles.item} >
      <Image style={{width:40,height:40}} source={image}/>
      <Text style={{color:'#333333',marginLeft:5,fontSize:16}}>{data}</Text>
      </View>
      </TouchableHighlight>
      {rowID==3?<View style={{backgroundColor:'#d8dadb', height:1/PixelRatio.get()}}/>:null}
      </View>
    );
  }
   /**
    每项点击
   **/
  onSelectItem(position){
    var func=this.props.onMenuItem;
    func&&func(position);
  }


  render(){
    return (
      <View style={{flex:1}}>
      <ListView
      style={{backgroundColor:'#ebedee'}}
       dataSource={this.state.dataSource}
       renderRow={this.renderRow.bind(this)}
       renderHeader={this.renderHeader.bind(this)}
      />

      <View style={{flexDirection:'row',height:46,alignItems:'center'}}>
      <TouchableHighlight style={{flex:1}} underlayColor='#ddd' onPress={()=>alert('设置')}>
      <View style={styles.btn}><Text>设置</Text></View>
      </TouchableHighlight>
      <View style={{backgroundColor:'#d8dadb', width:1/PixelRatio.get(),height:20,}}/>
      <TouchableHighlight style={{flex:1}} underlayColor='#ddd'
      onPress={()=>{
        Alert.alert('退出应用','确定要退出吗?',
        [
          {text:'确定',onPress:()=>{BackAndroid.exitApp()}},
          {text:'取消',onPress:()=>{}}
        ]
      );
                   }
    }>
      <View style={styles.btn}><Text>退出应用</Text></View>
      </TouchableHighlight>
      </View>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  head:{
    height:160,
    width:300,
    justifyContent:'center',
    alignItems:'center',
  },
  headText:{
    alignItems:'center',
    justifyContent:'center',
  },
  login:{
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:3,
    height:33,
    width:142,
    alignItems:'center',
    justifyContent:'center',
  },
  item:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
  },
  btn:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
});
