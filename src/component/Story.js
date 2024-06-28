import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AvatarUser from './Avatar';
import * as ImagePicker from 'expo-image-picker';
import { useUserStore } from '../../store/zustand';
import { Avatar } from '@rneui/base';
import { PRIMARYCOLOR } from '../../assets/Constant/COLOR';
import { db } from "../../.firebase/firebaseConf"
import { collection, getDocs } from 'firebase/firestore';
import { Skeleton } from '@rneui/themed';

const Story = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [stories, setStories] = useState([]);

  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      navigation.navigate("View", { image: result.assets[0].uri });
    }
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stories"));
        const fetchedStories = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStories(fetchedStories);
      } catch (error) {
        console.error("Error fetching stories: ", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {!userData || userData.status !== "student" && (
            <Pressable style={styles.card} onPress={pickImage}>
              <Avatar
                title={userData?.name[0] || ''}
                containerStyle={styles.cardStory}
                size={'large'}
              />
              <View style={styles.cardUser}>
                <AntDesign name="plus" size={24} color="#1777f2" />
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.text}>Add a Story</Text>
              </View>
            </Pressable>
          )}

          {stories.map(story => (
            <Pressable key={story.id} style={styles.card} onPress={() => navigation.navigate("StoriesNavigation", { stories: stories })}>
              <Image
                source={{ uri: story.image }}
                style={styles.cardStory}
              />
              <View style={styles.cardUser}>
                <AvatarUser
                  source={{ uri: story.userImage }}
                  story={true}
                />
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.text}>{story.userName}</Text>
              </View>
            </Pressable>
          ))}

          {stories.length === 0 && [Array(6).keys()].map((_, index) => (
            <Skeleton key={index} animation='wave' width={106} height={170} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomDivider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 192,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingLeft: 11,
  },
  card: {
    width: 106,
    height: 170,
    position: 'relative',
    marginRight: 8,
  },
  cardStory: {
    width: '100%',
    height: 170,
    borderRadius: 12,
    backgroundColor: PRIMARYCOLOR
  },
  cardUser: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    width: '100%',
    position: 'absolute',
    bottom: 12,
    left: 9,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
});

export default Story;
