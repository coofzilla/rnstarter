import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <Text>{title}</Text>
      <Text>Score is {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 70,
  },
});

export default ImageDetail;
