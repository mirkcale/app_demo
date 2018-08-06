import React from 'react';
import { View, Text, Button } from 'react-native';
import Scanner from '../scanner/Scanner';
const Geolocation =require('Geolocation');

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

  nav () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
        console.log(initialPosition);
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    let watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  render() {
    return (
      <View>
        <Text>我的</Text>

        <Button onPress={() => this.navigatorToHome()} title='跳转到home'/>

        <Button onPress={() => this.nav()} title={'定位'}/>
      </View>
    )
  }
}