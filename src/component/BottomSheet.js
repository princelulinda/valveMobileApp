import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import LottieView from 'lottie-react-native'
import { LinearGradient } from 'expo-linear-gradient'
import NFCScreen from './test'

const BottomSheet = ({refRBSheet}) => {
  return (
    <RBSheet
    ref={refRBSheet}
    useNativeDriver={true}
    customStyles={{
      wrapper: {
        backgroundColor: 'transparent',
      },
      draggableIcon: {
        backgroundColor: '#000',
      },
    }}
    customModalProps={{
      animationType: 'slide',
      statusBarTranslucent: true,
    }}
    customAvoidingViewProps={{
      enabled: false,
    }}>
         <LinearGradient
    colors={[ '#a7c6c5',
    '#92b6c2',
    '#88a4be',
    '#8c90b3',
    '#957a9d',]}
    style={[styles.scanAnimation]} 
    start={{ x: 0.5, y: 0.5 }} 
    end={{ x: 1, y: 1 }} 
    children={<View
        >
        <LottieView source={require('../../assets/lottie/scanAnimation.json')} autoPlay loop />
        <NFCScreen/>
      </View>}
  /> 
  </RBSheet>
  )
}
const styles = StyleSheet.create({
    scanAnimation: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#18329c',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
    }
    ,
    button:{
        borderStyle:"solid", borderWidth:1  , borderColor:"#0b22e6",
     borderRadius:10, padding:10, alignItems: 'center', justifyContent: 'center',
     width: 150, color: '#0b22e6', marginTop: 60,
    },
    contener: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     image: {
       width: 350,
       height: 400,
       resizeMode: 'contain',
       marginTop: -70
     }
    });
export default BottomSheet