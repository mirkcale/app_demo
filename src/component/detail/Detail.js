import React from 'react';
import { createStackNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from '../../component/home/Home';
import Me from '../../component/me/Me';
import Weather from '../../component/weather/QueryWether';
import Header from '../../widgets/header/Header';

export default createBottomTabNavigator({
    Home: {
      screen: Home
    },
    Me: {
      screen: Me
    },
    Weather: {
      screen: Weather
    }
  },

  {
    initialRouteName: 'Weather',
    navigationOptions: ({ navigation }) => ({
      header: Header,
      tabBarIcon: ''
    }),

    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray'
    }
  }
)