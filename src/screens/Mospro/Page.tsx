import React from 'react';
import {Dimensions, Image} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');
export default function Page({img}: {img: any}) {
  return (
    <Animated.ScrollView>
      <Image source={img.src} style={{height: height, width: width}} />
    </Animated.ScrollView>
  );
}
