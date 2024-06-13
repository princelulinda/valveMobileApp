import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { BLACKCOLOR } from '../../assets/Constant/COLOR';
import { useNavigation } from '@react-navigation/native';

export default function HadleDotsTree() {
  const navigation =  useNavigation()
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={()=>navigation.navigate("studentClubs")}>
        <Text style={{fontSize:17, color:"#333"}}>Clubs d'Etudiants</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17, color:"#333"}}>Conseil des Etudiants</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17, color:"#333"}}>Direction de la Recherche </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontSize:17, color:"#333"}}>Assurance Qualiter</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>navigation.navigate("Setting")}>
        <Text style={{fontSize:17, color:"#333"}}> Setting</Text>
      </Pressable>
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
      backgroundColor: BLACKCOLOR, 
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