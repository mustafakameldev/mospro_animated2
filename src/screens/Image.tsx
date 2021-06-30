// If commeted this code cause of i will  back to it on this stage
// import React, {useState} from 'react';
// import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from 'react-native-reanimated';
// const ImageController = () => {
//   const randomNumber = useSharedValue(100);
//   const style = useAnimatedStyle(() => {
//     return {width: randomNumber.value, height: randomNumber.value};
//   });
//   return (
//     <View style={styles.controller}>
//       <TouchableOpacity
//         onPress={() => {
//           randomNumber.value = withSpring(Math.random() * 350);
//         }}>
//         <Animated.Image
//           source={require('../../assets/back.jpg')}
//           style={style}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   controller: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: '#7CA1B4',
//     flexDirection: 'column',
//   },
// });
// export default ImageController;
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
const ImageController = () => {
  const randomNumber = useSharedValue(100);
  const style = useAnimatedStyle(() => {
    return {
      width: withSpring(randomNumber.value, {stiffness: 5}),
      height: withSpring(randomNumber.value, {stiffness: 10}),
    };
  });
  return (
    <View style={styles.controller}>
      <TouchableOpacity
        onPress={() => {
          randomNumber.value = withSpring(Math.random() * 350);
        }}>
        <Animated.Image
          source={require('../../assets/back.jpg')}
          style={style}
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
