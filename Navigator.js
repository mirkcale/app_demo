import React from 'react';
import { createStackNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './src/component/home/Home';
import Me from './src/component/me/Me';
import Weather from './src/component/weather/QueryWether';
import Header from './src/widgets/header/Header';
import Login from './src/component/login/Login';
import Camera from './src/widgets/camera/Camera';

const Main = createBottomTabNavigator({
    Home: {
      screen: Home
    },
    Me: {
      screen: Me
    },
    Weather: {
      screen: Weather
    },
    Camera: {
      screen: Camera
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
export default createStackNavigator(
  {
    Home: Main,
    Login: Login
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)