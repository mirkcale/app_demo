import React from 'react';
import { View, ScrollView, Text, Button, Image, StyleSheet } from 'react-native';

const Mock = require('mockjs');
const { Random, mock } = Mock;
var Geolocation = require('Geolocation');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list_item: {
    flex: 1
  },
  list_item_img: {
    width: 200,
    height: 100
  },

});

export default class Weather extends React.Component {
  static navigationOptions = {
    title: '天气',
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

  queryWeather() {
    fetch('http://www.zuimeitianqi.com/zuimei/queryWeather', {
      method: 'post',
      body: JSON.stringify({
        cityCode: '01013101'
      })
    }).then((res) => {
      console.log(res)
      alert(JSON.stringify(
        res
      ))
      // this.weather = resJson
    })
  }


  list = mock({
    'list|20-50': [{
      'id|+1': 1,
      'name': '@FIRST',
      'avator': Random.image('200x100', Random.color(), '@name'),
      'desc': '@sentence'
    }]
  })

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.list.list.map((item) => {
            return (
              <View key={item.id} style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <Image source={{ uri: item.avator }} style={styles.list_item_img}/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
                  <Text style={{alignSelf:'flex-start'}}>{item.name}</Text>
                  <Text>{item.desc}</Text>
                </View>
              </View>
            )
          })
        }
        <Button onPress={() => this.queryWeather()} title='天气查询'/>
      </ScrollView>
    )
  }
}