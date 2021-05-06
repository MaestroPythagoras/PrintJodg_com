import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const AdminView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Logo />
        <Text style={styles.welcome}>Selamat Datang Admin !</Text>
        <Text style={styles.Header}>Berikut Ini List Antrian Pesanan :</Text>
        <View style={styles.box}>
          <Text>mm</Text>
        </View>
      </View>
    </View>
  );
};

export default AdminView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    alignItems: 'center',
  },
  welcome: {
    alignItems: 'center',
    marginTop: 0,
    fontSize: 18,
  },
  Header: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: '700',
  },
  box: {
    marginVertical: 20,
    borderWidth: 5,
    borderColor: '#BAC4D3',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
