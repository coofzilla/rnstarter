import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Jay';
  return (
    <View>
      <Text style={styles.intro}>Getting started with react native!</Text>
      <Text style={styles.name}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
