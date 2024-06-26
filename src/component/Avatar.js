import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ source, online, story }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={[styles.user, story && styles.userStory]} />
      {online && <View style={styles.userActive} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#1777f2',
    borderWidth: 0,
  },
  userStory: {
    borderWidth: 3,
  },
  userActive: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#4bcb1f',
    position: 'absolute',
    bottom: -2,
    right: -2,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});

export default Avatar;
