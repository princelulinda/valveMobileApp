import { Icon } from '@rneui/base';
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Picker,Alert} from 'react-native';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';
import {db, storage} from "../../../.firebase/firebaseConf.js"
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytes } from 'firebase/storage';
import { useUserStore } from '../../../store/zustand.js';


const ComposeEmailScreen = ({ navigation }) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
 const [department, setDepartment] = useState('all_departments');
  const [promotion, setPromotion] = useState('all_promotions');
  const [senderName, setSenderName] = useState('');
  const [messageTitle, setMessageTitle] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null)
  const {user} = useUserStore()
  
  const handleSendEmail = async() => {
      try {
      let fileURL = '';
      if (file) {
        const response = await fetch(file.assets[0].uri);
        const fileBlob = await response.blob();
        const refdoc = ref(storage, `annonces/${file.assets[0].name}`);
        uploadBytes(refdoc, fileBlob).then((snapshot) => {
            fileURL =  snapshot.metadata.name
});
      }
      const docRef = await addDoc(collection(db, "annonces"),{
        promotion:promotion,
        department:department,
        subject: subject,
        body: body,
        fileURL: fileURL,
        timestamp: new Date(),
        sender:user
      });
      Alert.alert('Success', 'Email sent successfully');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send email');
    }
  };
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result)
    if (result.canceled === false) {
      setFile(result);
    }
  };
  return (
    <View style={{ flex: 1,}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Icon name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Compose Email</Text>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={pickDocument} style={styles.headerButton}>
          <Icon name="attach-file" size={24} color="#111" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSendEmail} style={styles.headerButton}>
          <Icon name="send" size={24} color="#111" />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Choisir un département" value="" />
          <Picker.Item label="Tous les départements" value="all_departments" />
          <Picker.Item label="Sciences informatiques" value="computer_science" />
          <Picker.Item label="Genie et gestion de télécommunication" value="telecom" />
          <Picker.Item label="Finance et Banque" value="finance_banking" />
          <Picker.Item label="Medecine et soin de santé" value="medicine" />
        </Picker>

        <Picker
          selectedValue={promotion}
          onValueChange={(itemValue) => setPromotion(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Choisir une Promotion" value="" />
          <Picker.Item label="Toutes les promotions" value="all_promotions" />
          <Picker.Item label="2022" value="2022" />
          <Picker.Item label="2023" value="2023" />
          <Picker.Item label="2024" value="2024" />
        </Picker>
      </View>
        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={styles.body}
          placeholder="Compose email"
          value={body}
          onChangeText={setBody}
          multiline
          numberOfLines={10}
        />
      </View>
      {file && <Text>Selected File: {file.assets[0].name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor:PRIMARYCOLOR
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"#111"
  },
  container: {
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderColor: '#ccc',

  },
  body: {
    flex: 1,
    textAlignVertical: 'top',
    padding: 8,
  },
  pickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap:10
  },
  picker: {
    flex: 1,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 8,
    borderWidth:0,
    paddingVertical:10
  },
});

export default ComposeEmailScreen;

