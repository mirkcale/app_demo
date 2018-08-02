import React from 'react';
import { View, Text, Button, WebView } from 'react-native';

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
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    )
  }
}