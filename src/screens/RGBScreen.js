import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT = 10;
//declared outside by convetion; and also less confusing state var

//function manage change to object
const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number };
  //action how object is changed
  //action === {colorToChange: 'red' || 'green' || 'blue', amount}
  //colorToChange is type

  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };

    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
        
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const RGBScreen = () => {
  //dispatch run my reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorAdjuster
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })
        }
      />
      <ColorAdjuster
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })
        }
      />
      <ColorAdjuster
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default RGBScreen;
