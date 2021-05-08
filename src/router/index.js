import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AboutUs,
  Home,
  Promo,
  SignIn,
  SignUp,
  SplashScreen,
  FormatPrint,
} from '../pages';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="About Us" component={AboutUs} />
      <Stack.Screen
        name="Promo"
        component={Promo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FormatPrint"
        component={FormatPrint}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
