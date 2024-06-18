import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

const AnimatedButton = ({scrollY}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = scrollY.addListener((value) => {
      setScrolled(value > 100); 
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, []);
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(scrolled ? 50 : 200, { duration: 300 }),
      height: withTiming(50, { duration: 300 }),
      borderRadius: withTiming(scrolled ? 25 : 10, { duration: 300 }),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(scrolled ? 0 : 1, { duration: 300 }),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, animatedButtonStyle]}>
        <TouchableOpacity style={styles.innerButton}>
          {scrolled ? (
            <Feather name="plus" size={24} color="white" />
          ) : (
            <Animated.Text style={[styles.text, animatedTextStyle]}>Nouveau Message</Animated.Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const {height} = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:"fixed",
    top:height-height/4,
    right:20
  },
  button: {
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default AnimatedButton;
