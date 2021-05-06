import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {AboutUs, AdminView} from './pages';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    <AdminView />
  );
};

export default App;
