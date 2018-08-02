import React from 'react';
import { View, Text, Button } from 'react-native';
import Scanner from '../scanner/Scanner'

export default class Home extends React.Component {
  static navigationOptions = {
    title: '我的',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  constructor(props) {
    super(props)
  }

  navigatorToHome() {
    const { navigate } = this.props.navigation;
    navigate('Home', { name: 'miracle' })
  }

  render() {
    return (
      <View>
        <Text>我的</Text>

        <Button onPress={() => this.navigatorToHome()} title='跳转到home'/>
      </View>
    )
  }
}