import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ImageController = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const randomNumber = useSharedValue(200);
  const heightNumber = useSharedValue(200);
  const style = useAnimatedStyle(() => {
    return {
      width: withSpring(randomNumber.value, {stiffness: 10}),
    };
  });
  const height = useAnimatedStyle(() => {
    return {
      height: withSpring(heightNumber.value, {stiffness: 10}),
    };
  });
  return (
    <View style={styles.controller}>
      <TouchableOpacity
        onPress={() => {
          if (fullScreen) {
            heightNumber.value = withSpring(200);
            randomNumber.value = withSpring(200);

            setFullScreen(false);
          } else {
            randomNumber.value = withSpring(windowWidth);
            heightNumber.value = withSpring(windowHeight);
            setFullScreen(true);
          }
        }}>
        <Animated.Image
          source={require('../../../assets/back.jpg')}
          style={[style, height]}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  controller: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#7CA1B4',
    flexDirection: 'column',
  },
});
export default ImageController;
