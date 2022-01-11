import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        image={require('../../assets/images/forest.jpg')}
      />
      <ImageDetail
        title="Beach"
        image={require('../../assets/images/beach.jpg')}
      />
      <ImageDetail
        title="Mountain"
        image={require('../../assets/images/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
