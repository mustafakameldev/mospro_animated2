import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../../components/Page';
const {height, width} = Dimensions.get('window');
const WORDS = ["What's", 'up', 'mobile', 'devs?'];
export default function App() {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      style={styles.container}>
      {WORDS.map((title, index) => {
        return (
          <Animated.ScrollView
            style={{
              flex: 1,
              height: 800,
              width: width,
              backgroundColor: `rgba(0,0,0,${index / 5})`,
            }}>
            <View
              style={{
                height: height,
                width: width,
                alignItems: 'center',r
                justifyContent: 'center',
              }}>
              <Text>{title}</Text>
            </View>
          </Animated.ScrollView>
        );
      })}
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
