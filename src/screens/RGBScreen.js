import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT = 10;
//declared outside by convetion; and also less confusing state var

//function manage change to object
const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number };
  //action how object is changed
  //action === {type: 'change_red' || 'change_green' || 'change_blue', payload}
  //type is colorToChange
  //payload is amount

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })
        }
      />
      <ColorAdjuster
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })
        }
      />
      <ColorAdjuster
        color="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })
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
