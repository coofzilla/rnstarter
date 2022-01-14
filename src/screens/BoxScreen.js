import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  console.log(<Text />);
  return (
    <View style={styles.view}>
      <Text style={styles.textOne}>child 1</Text>
      <Text style={styles.textTwo}>child 2</Text>
      <Text style={styles.textThree}>child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOne: {
    backgroundColor: 'red',
    width: 100,
  },
  textTwo: {
    backgroundColor: 'green',
    width: 100,
    position: 'relative',
    top: 100,
  },
  textThree: {
    backgroundColor: 'purple',
    width: 100,
  },
});

export default BoxScreen;
