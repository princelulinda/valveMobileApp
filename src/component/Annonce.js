import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { Octicons } from '@expo/vector-icons';
import AnnonceCard from './AnnoceCard';

export default function Annonce() {
  return (
    <View>
      <View style={{display:"flex",width:"100%",justifyContent:"space-between", flexDirection:"row", marginTop:10, paddingRight:10}}>
        <Text> </Text>
      <Octicons name="filter" size={24} color="black" />
      </View>
      <View style={{marginTop:10}}>
         <AnnonceCard/>
      </View>
    </View>
  )
}


