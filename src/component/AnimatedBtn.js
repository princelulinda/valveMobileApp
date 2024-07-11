import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { PRIMARYCOLOR } from '../../assets/Constant/COLOR';

const AnimatedButton = ({scrollY, onPress}) => {

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button]}>
        <TouchableOpacity style={styles.innerButton} onPress={onPress}>
          {!scrollY ? (
            <Feather name="plus" size={24} color="white" />
          ) : (
            <Animated.Text style={[styles.text]}>Nouveau Message</Animated.Text>
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
    top:"80%",
    right:20
  },
  button: {
    backgroundColor: PRIMARYCOLOR,
    justifyContent: 'center',
    borderRadius:7,
    alignItems: 'center',
  },
  innerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:10,
    paddingHorizontal:30,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default AnimatedButton;
