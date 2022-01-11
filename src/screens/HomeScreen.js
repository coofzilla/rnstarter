import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Infinite Power</Text>
      <Button
        onPress={() => {
          //props from createStackNavigator
          navigate('Components');
        }}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => {
          navigate('List');
        }}
        title="Go to List Demo"
      />
      <Button
        onPress={() => {
          navigate('Image');
        }}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => {
          navigate('Counter');
        }}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => {
          navigate('Color');
        }}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => {
          navigate('RGB');
        }}
        title="Go to RGB Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
