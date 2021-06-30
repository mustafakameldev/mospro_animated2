import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import SliderComponents from '../components/slider';
const HANDLE_WIDTH = 20;
const MyComponent: React.FC = () => {
  const x = useSharedValue(0);
  // const boxStyle = useAnimatedStyle(() => {
  //   return {
  //     width: 100,
  //     height: 100,
  //     backgroundColor: 'red',
  //     // Animate translateX
  //     transform: [{translateX: x.value}],
  //   };
  // });
  const onPress = () => {
    x.value = withTiming(200, {duration: 200});
  };
  return (
    <View style={{flex: 1}}>
      {/* <Button title="Increment x" onPress={onPress} /> */}
      {/* <Animated.View style={boxStyle} /> */}
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          left: 20,
          backgroundColor: 'white',
          height: 30,
          borderRadius: 15,
        }}>
        <SliderComponents />
      </View>
    </View>
  );
};
export default MyComponent;
