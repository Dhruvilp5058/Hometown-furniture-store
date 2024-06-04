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
import { horizontalScale, moderateScale, verticalScale } from '../../Screens/Metrics';
import Colors from '../../../assets/Colour/colour';

const ToggelSwitch = (props) => {
  const defaultStyles = {
    bgGradientColors: ['lightgrey', 'lightgrey'],
    headGradientColors: ['black', 'black'],
  };

  const activeStyles = {
    bgGradientColors: [Colors.primarycolour, Colors.primarycolour],
    headGradientColors: [Colors.backgroundScreen, Colors.shadowcolour],
  };
  const {value, onValueChange,storageKey } = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? horizontalScale(1.5) : horizontalScale(0),
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
    borderRadius: moderateScale(16),
    alignSelf:'flex-end',
    bottom:verticalScale(20)
  },
  backgroundGradient: {
    borderRadius: moderateScale(16),
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headGradient: {
    width: horizontalScale(24),
    height: verticalScale(24),
    borderRadius: moderateScale(48),
  },
});
export default ToggelSwitch;
