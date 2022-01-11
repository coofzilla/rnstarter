import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomHexColor = () => {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randHex}`;
  };

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomHexColor()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        //rename with destructuring
        renderItem={({ item: color }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: color,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
