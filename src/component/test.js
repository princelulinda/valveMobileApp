import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Alert,  Platform, View } from 'react-native';
import NfcManager, { NfcTech, NfcTechNdef } from 'react-native-nfc-manager';
const NFCScreen = () => {
  const refRBSheet = useRef();
console.log(refRBSheet);
  useEffect(() => {
    async function initNFC() {
      try {
        await NfcManager.start();

        NfcManager.setEventListener(NfcTech.Ndef, async (tag) => {
          if (tag.ndefMessage) {
            const textData = tag.ndefMessage[0].payload;
            const text = textData ? NfcManager.parseUri(textData) : null;
            if (text) {
              // Faire quelque chose avec les données lues
              Alert.alert('Données NFC lues', text);
              console.log(text);
            }
          }
        });

        NfcManager.setEventListener(NfcTech.Ndef, (tag) => console.log(`Tag with id ${tag.id} entered the field`));

        NfcManager.setEventListener(NfcTech.Ndef, (tag) => console.log(tag));

        NfcManager.setEventListener(NfcTech.Ndef, () => NfcManager.requestTechnology(NfcTechNdef));
      } catch (ex) {
        console.warn(ex);
        NfcManager.cancelTechnologyRequest();
      }
    }

    initNFC();

    return () => {
      NfcManager.setEventListener(NfcTech.Ndef, null);
      NfcManager.setEventListener(NfcTech.Ndef, null);
      NfcManager.setEventListener(NfcTech.Ndef, null);
      NfcManager.cancelTechnologyRequest();
    };
  }, []);

  useEffect(() => {
    async function checkNFCEnabled() {
      
      const isEnabled = await NfcManager.isEnabled();
      console.log(isEnabled)
      if (!isEnabled) {
        if (Platform.OS === 'ios') {
          Alert.alert(
            'NFC désactivé',
            'Activer NFC dans les paramètres pour utiliser cette fonctionnalité.'
          );
        } else {
          Alert.alert(
            'NFC désactivé',
            'Voulez-vous activer le NFC ?',
            [
              { text: 'Oui', onPress: () => NfcManager.goToNfcSetting() },
              { text: 'Non', onPress: () => console.log('NFC non activé') }
            ]
          );
        }
      }
    }

    checkNFCEnabled();
  }, []);

  return (
   <Text style={{justifyContent:"center", alignItems:"center", color:"white"}}>scan ...</Text>
  )
};

export default NFCScreen;
