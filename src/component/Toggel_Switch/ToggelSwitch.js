import {
  Pressable,
  View,
  Animated,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { horizontalScale, verticalScale } from '../../Screens/Metrics';

const ToggelSwitch = (props) => {
  const defaultStyles = {
    bgGradientColors: ['lightgrey', 'lightgrey'],
    headGradientColors: ['black', 'black'],
  };

  const activeStyles = {
    bgGradientColors: ['rgb(0, 172, 255)', 'rgb(0, 172, 255)'],
    headGradientColors: ['black', 'black'],
  };
  const {value, onValueChange,storageKey } = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1.5 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 28],
  });

  const toggleSwitch = async () => {
    const newValue = !value;
    onValueChange(newValue);
    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const currentStyles = value ? activeStyles : defaultStyles;
  return (
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <LinearGradient
        colors={currentStyles.bgGradientColors}
        style={styles.backgroundGradient}
        start={{
          x: 0,
          y: 0.5,
        }}>
        <View style={styles.innerContainer}>
          <Animated.View
            style={{
              transform: [{translateX}],
            }}>
            <LinearGradient
              colors={currentStyles.headGradientColors}
              style={styles.headGradient}
            />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressable: {
    width: horizontalScale(64),
    height: verticalScale(32),
    borderRadius: 16,
    marginLeft:'75%',
    bottom:'36%'
  },
  backgroundGradient: {
    borderRadius: 16,
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  headGradient: {
    width: 24,
    height: 24,
    borderRadius: 100,
  },
});
export default ToggelSwitch;
