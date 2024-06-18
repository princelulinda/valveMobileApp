import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BLACKCOLOR, PRIMARYCOLOR } from '../../../assets/Constant/COLOR';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="100" viewBox="0 0 100 100" style={styles.logo}>
        <Path d="M50 5c12.5 0 24.5 5 33.5 14.5s14.5 21 14.5 33.5-5 24.5-14.5 33.5S62.5 95 50 95 25.5 90 16.5 80.5 2 63.5 2 50 7 24.5 16.5 14.5 37.5 5 50 5m0-5C23 0 0 23 0 50s23 50 50 50 50-23 50-50S77 0 50 0z" fill={PRIMARYCOLOR} />
      </Svg> 
      <Text style={styles.welcomeText}>Welcome! to Valve App</Text>
      <TextInput style={styles.input} placeholder="Phone number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>I forgot my password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.tryServices}>Are you Admin ? <Text style={styles.hereYouAre}>Login Here</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: BLACKCOLOR,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: PRIMARYCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPassword: {
    color: PRIMARYCOLOR,
    marginBottom: 20,
  },
  tryServices: {
    color: '#000',
  },
  hereYouAre: {
    color: PRIMARYCOLOR,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
