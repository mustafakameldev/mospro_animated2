import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {View} from 'react-native';
const HANDLE_WIDTH = 20;
const Slider = () => {
  const sliderWidth = useSharedValue(0);
  const progress = useSharedValue(0);

  const animatedHandleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(progress.value - HANDLE_WIDTH / 2)}],
    };
  });
  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startProgress: number}
  >({
    // On start, make note of the progress value at start of gesture.
    onStart: (_, ctx) => {
      console.log('ctx', ctx);
      ctx.startProgress = progress.value;
    },

    // On pan, new progress is the starting progress plus change in position
    onActive: (event, ctx) => {
      console.log('ctx', ctx);
      progress.value = ctx.startProgress + event.translationX;
    },
    // On pan-end, snap back to 0 or sliderWidth if out of bounds.
    onEnd: () => {
      console.log('ctx');
      if (progress.value > sliderWidth.value) {
        progress.value = withSpring(sliderWidth.value);
      } else if (progress.value < 0) {
        progress.value = withSpring(0);
      }
    },
  });
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // progress.value = Math.random() * sliderWidth.value;
  //     progress.value = withSpring(Math.random() * sliderWidth.value);
  //   }, 1500);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(234,234,234)',
        justifyContent: 'flex-end',
        borderRadius: 10,
      }}
      onLayout={e => {
        sliderWidth.value = e.nativeEvent.layout.width;
      }}>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View
          style={[
            {
              backgroundColor: 'blue',
              borderRadius: 10,
              position: 'absolute',
              width: 40,
              bottom: -20,
              top: -20,
            },
            animatedHandleStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Slider;
