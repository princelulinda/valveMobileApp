
import { Icon } from '@rneui/base'
import * as DropdownMenu from 'zeego/dropdown-menu'
import { BLACKCOLOR } from '../../assets/Constant/COLOR'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

export function MyMenu({navigation}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
      <Icon
          name="dots-three-vertical"
          type="entypo"
          color="#333"
          size ={29}
        />
</DropdownMenu.Trigger>
    <DropdownMenu.Content>
    <TouchableOpacity onPress={()=>navigation.navigate("studentClubs")}>
               <Text>Clubs d'Etudiants</Text>
             </TouchableOpacity>
    </DropdownMenu.Content>

    </DropdownMenu.Root>
  )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor:"#fff",
       padding:10,
       gap:10,
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