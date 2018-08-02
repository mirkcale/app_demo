import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: '登录页',

  };

  constructor(props){
    super(props)
  }
  navigatorToMe() {
    const { navigate } = this.props.navigation;
    navigate('Me', {name: 'miracle'})
  }
  render() {
    return(
      <View>
        <Text>home page</Text>
        <Button onPress={()=>this.navigatorToMe()} title='跳转到' />
      </View>
    )
  }
}