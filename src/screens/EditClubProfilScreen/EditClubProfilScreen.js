import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';

const EditProfileScreen = ({ navigation }) => {
  // États pour les informations de profil
  const [name, setName] = useState('Nom de la Personne');
  const [email, setEmail] = useState('email@example.com');
  const [description, setDescription] = useState('Description courte de la personne...');
  const [avatar, setAvatar] = useState('assets/logoFongolab.png');

  const handleSave = () => {
    console.log({
      name,
      email,
      description,
      avatar,
    });
    navigation.goBack(); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.changeAvatarText}>Change Photo</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    backgroundColor: PRIMARYCOLOR,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarText: {
    color: '#007bff',
    marginTop: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: PRIMARYCOLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
