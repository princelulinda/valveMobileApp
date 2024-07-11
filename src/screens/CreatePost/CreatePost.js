import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';
import { AntDesign } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../../.firebase/firebaseConf';
import { useUserStore } from '../../../store/zustand';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUserStore();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch(image.uri);
      const fileBlob = await response.blob();
      const storageRef = ref(storage, `Posts/${image.name}`);
      const snapshot = await uploadBytes(storageRef, fileBlob);
      const fileURL = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, 'posts'), {
        title: title,
        description: description,
        image: fileURL,
        createdAt: new Date(),
        user: user
      });
      navigation.goBack();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={[styles.imageContainer, !image && { backgroundColor: PRIMARYCOLOR }]} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <AntDesign name="plus" size={100} color="#ddd" style={{ fontWeight: "bold" }} />
        )}
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        multiline
        numberOfLines={2}
        underlineColorAndroid="transparent"
        selectionColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={6}
        underlineColorAndroid="transparent"
        selectionColor="#000"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: "100%",
    height: "30%",
    borderRadius: 10,
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: PRIMARYCOLOR,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 7,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
    alignSelf: "flex-end"
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
