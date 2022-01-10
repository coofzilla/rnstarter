import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend 1' },
    { name: 'friend 2' },
    { name: 'friend 3' },
    { name: 'friend 4' },
    { name: 'friend 5' },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
