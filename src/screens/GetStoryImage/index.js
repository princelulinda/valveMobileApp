import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View, TouchableOpacity, Text, Platform } from "react-native";
import { PRIMARYCOLOR } from "../../../assets/Constant/COLOR";
import { Icon } from "@rneui/base";
import { addDoc, collection } from "firebase/firestore";
import { db, storage} from "../../../.firebase/firebaseConf";
import { useUserStore } from "../../../store/zustand";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ActivityIndicator } from "react-native";

function ViewAffiche({ route, navigation }) {
  const [text, setText] = useState("");
  const { user } = useUserStore();
  const [loading, setLoading] = useState(false)

  const handlePost = async () => {
    setLoading(true)
    if (user) {
      try {
        let fileURL = '';

        if (route.params.image) {
          const response = await fetch(route.params.image);
          const fileBlob = await response.blob();
          const storageRef = ref(storage, `stories/${route.params.image.slice(0,10)}`);
            const snapshot = await uploadBytes(storageRef, fileBlob);
            fileURL = await getDownloadURL(snapshot.ref);
        }

        await addDoc(collection(db, "stories"), {
          image: fileURL,
          text: text,
          user: user,
          createdAt: new Date(),
        });

        if (Platform.OS === "android") {
          ToastAndroid.show("Story posted successfully!", ToastAndroid.SHORT);
        }
        navigation.navigate("/")
      } catch (error) {
        console.error(error);
        if (Platform.OS === "android") {
          ToastAndroid.show("Failed to post story.", ToastAndroid.SHORT);
        }
      }finally{
        setLoading(false)
      }
    } else {
      if (Platform.OS === "android") {
        ToastAndroid.show("User not logged in.", ToastAndroid.SHORT);
      }
    }
  };

  return (
    <>
      <Image
        source={{ uri: route.params.image }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre texte ici"
          value={text}
          onChangeText={setText}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handlePost}>
          {loading?<ActivityIndicator size={"small"} color={"#ddd"}/>:(
            <>
            <Text style={styles.buttonText}>Patager un affiche</Text>
           <Icon name="send" size={24} color={"#fff"} />
           </>
           )}
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginBottom: 20,
    fontSize: 18,
    outline: "none",
  },
  button: {
    backgroundColor: PRIMARYCOLOR,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf:"flex-end",
    width:"75%"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ViewAffiche;
