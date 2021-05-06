import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Home, Profile} from '../../assets';

const TabItem = ({label, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'HomeUser') {
      return <Home />;
    }

    if (label === 'ProfileUser') {
      return <Profile />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon style={styles.ikon} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 1,
  },
  text: {
    alignItems: 'center',
  },
});
