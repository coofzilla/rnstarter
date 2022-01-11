import React, { useState } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const RGBScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorAdjuster
        color="Red"
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
      />
      <ColorAdjuster
        color="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setRed(green - 1)}
      />
      <ColorAdjuster
        color="Blue"
        onIncrease={() => setRed(blue + 1)}
        onDecrease={() => setRed(blue - 1)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export default RGBScreen;
