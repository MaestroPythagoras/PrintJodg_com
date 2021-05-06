import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AboutUs, HomeUser, ProfileUser} from '../pages';
import {BottomTabNavigator} from '../components';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Router = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen name="HomeUser" component={HomeUser} />
      <Tab.Screen name="ProfileUser" component={ProfileUser} />
    </Tab.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
