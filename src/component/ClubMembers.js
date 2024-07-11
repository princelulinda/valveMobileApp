import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

export default function ClubMembers() {
  return (
    <View style={{padding:10, gap:10}}>
            <View style = {styles.clubMember}>
             <Avatar title='A'  containerStyle={{backgroundColor:"#ddd"}} rounded={true} size={"medium"}/>
             <View>
                <Text style = {styles.clubMemberName}>Akilimali Z. Elie</Text>
                <Text>Coordinateur</Text>
             </View>
            </View>
            <View style={styles.clubMember}>
             <Avatar title='M' containerStyle={{backgroundColor:"#ddd"}} rounded={true} size={"medium"}/>
             <View >
                <Text style={styles.clubMemberName}>Mugisa Elie</Text>
                <Text>Vise-Coordinateur</Text>
             </View>
            </View>
         </View>

  )
}
const styles = StyleSheet.create({
  clubMember:{
    flexDirection:"row", 
    gap:20,
  },
  clubMemberName:{
    fontSize:18,
    fontWeight:"bold"
  }
})