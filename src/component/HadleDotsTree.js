import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function HadleDotsTree() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17}}>Clubs d'Etudiants</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17}}>Conseil des Etudiants</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17}}>Direction de la Recherche </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17}}>Assurance Qualiter</Text>
      </Pressable>
      <View style={styles.mode}> 
        <Text style={{fontSize:17}}>Mode</Text>
        <Pressable style={styles.button}>
        <Feather name="sun" size={24} color="black" />
      </Pressable>
      </View>
      <Pressable style={styles.deconnexion}>
        <Text style={styles.deconnexiontext}>Deconnexion</Text>
      </Pressable>
    </View>
    
  )
} 
const styles = StyleSheet.create({
    container: {
       position:"absolute", 
       top:"7%",
       zIndex:5,
       right:10,
       backgroundColor:"#fff",
       padding:10,
       gap:10
    },
    button:{
        paddingVertical:10
    },
    mode:{
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-between"
    },
    deconnexion: {
      backgroundColor: '#ff6347', 
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
      alignSelf: 'center', 
      marginTop: 20, 
    },
    deconnexiontext: {
      color: 'white', 
      fontSize: 16,
      fontWeight: 'bold',
    },

})