import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/profile-pic.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>
      <Button title="Edit Profile" onPress={() => { /* Edit profile logic */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});

export default ProfileScreen;
