import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';

const SettingsScreen = ({ navigation }) => {
  const [pushNotification, setPushNotification] = useState(false);
  const [facebook, setFacebook] = useState(true);
  const [twitter, setTwitter] = useState(false);
  const [google, setGoogle] = useState(false);
  const [instagram, setInstagram] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <Text style={styles.subHeader}>Change account settings, connect social accounts and contact us for support.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>ACCOUNT</Text>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Push Notification</Text>
          <Switch value={pushNotification} onValueChange={setPushNotification} />
        </View>
        <View style={styles.optionRow}>
              <Text style={styles.optionText}>Mode</Text>
              <Pressable style={styles.button}>
              <Feather name="sun" size={24} color="black" />
            </Pressable>
        </View>
        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>SOCIAL ACCOUNTS</Text>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Facebook</Text>
          <Switch value={facebook} onValueChange={setFacebook} />
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Twitter</Text>
          <Switch value={twitter} onValueChange={setTwitter} />
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Google</Text>
          <Switch value={google} onValueChange={setGoogle} />
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Instagram</Text>
          <Switch value={instagram} onValueChange={setInstagram} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>SUPPORT</Text>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Call us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARYCOLOR,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subHeader: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    color: PRIMARYCOLOR,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default SettingsScreen;