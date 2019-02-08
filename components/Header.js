import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { MapView } from 'expo'
import { Button, Input } from 'react-native-elements';
import {connect} from 'react-redux';
import {addPlace} from '../actions/map';


export default class Header extends Component {
  render() {
    return (
      <View>
          <Text>Time Tracker</Text>
      </View>
 
    )};

}

const styles = {
  container: {
    width: '100%',
    height: '80%',
  }
}
