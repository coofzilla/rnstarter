import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image style={styles.image} source={image} />
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
