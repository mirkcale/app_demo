import React from 'react';
import { createStackNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './src/component/home/Home';
import Me from './src/component/me/Me';
import Weather from './src/component/weather/QueryWether';
import Header from './src/widgets/header/Header';
import Login from './src/component/login/Login';
import Camera from './src/widgets/camera/CameraWidget';
import Scanner from './src/widgets/camera/Scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Main = createBottomTabNavigator({
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
      tabBarIcon: ({ focused, tintColor }) => {
        console.log(navigation);
        const { routeName } = navigation.state;
        let iconName = `ios-information-circle${focused ? '' : '-outline'}`;

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
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
    Login: Login,
    Camera,
    Scanner
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        console.log(navigation);
        const { routeName } = navigation.state;
        let iconName = `ios-information-circle${focused ? '' : '-outline'}`;

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
)