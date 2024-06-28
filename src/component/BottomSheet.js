import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';
import { StyleSheet, Text } from 'react-native';



const BottomSheet = ({refRBSheet, children}) => {
  const [isVisible, setIsVisible] = useState(true);
 
  return (
    <SafeAreaProvider>
       <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        draggable={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#ddd',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        {children}
      </RBSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheet;
