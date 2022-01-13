import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  //array destructuring
  //initial state { counter: 0 }
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //dispatched object is the action
          dispatch({ type: 'increase', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease', payload: 1 });
        }}
      />

      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
