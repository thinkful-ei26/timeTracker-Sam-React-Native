import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Your Places',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-checkmark-circle'
          : 'md-checkmark-circle'
      }
    />
  ),
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  
});
