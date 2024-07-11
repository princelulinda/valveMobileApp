
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { PRIMARYCOLOR } from '../../assets/Constant/COLOR';
import HadleDotsTree, { MyMenu } from './HadleDotsTree';

const AppBar = ({navigation}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valve</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Feather name='search' size={29} color='black' />
        </TouchableOpacity>
        <MyMenu navigation={navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    paddingHorizontal: 11,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: PRIMARYCOLOR,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
});

export default AppBar;

