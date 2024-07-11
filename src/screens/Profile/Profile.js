
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'
import { BLACKCOLOR, PRIMARYCOLOR } from '../../../assets/Constant/COLOR'
import ProfileNavigation from '../../navigation/profileNavigation'

export default function Profile() {
  return (
   <ScrollView>
     <View style={styles.container}>
      <View>
        <Avatar title='F' containerStyle={{backgroundColor:PRIMARYCOLOR}} rounded={true} size={"xlarge"}/>
      </View>
      <View style={styles.infoContainer}>
         <View>
         <Text style= {styles.username}>
            Fongolab
        </Text>
         <Text>www.fongolab.com</Text>
         </View>
         <View style={{width:"70%"}}>
            <Text style={{textAlign:"center", fontWeight:"600"}}>Developpement de site web| mobile App| web App</Text>
         </View>
       <View>
       </View>
      </View>
    </View>
    <View>
    <ProfileNavigation/>

    </View>
   </ScrollView>
  )
}
const styles = StyleSheet.create({
container:{
   flex:1,
   alignItems:"center",
   gap:10,
   paddingVertical:20
},
  infoContainer:{
    alignItems:"center",
    gap:10,
  },
  username:{
    fontSize:25,
    fontWeight:"bold"
  },
  clubmember:{
    flexDirection:"row"
  }
})