import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';
import AnnonceCard from '../../component/AnnoceCard';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../.firebase/firebaseConf';
import { Skeleton } from '@rneui/base';
import PostSkeleton from '../../component/PostSkeleton';
import { useClubStore, usePostStore } from '../../../store/zustand';

const StudentClubScreen = () => {
  const [clubsData, setClubsData] = useState([])
  const [loading, setLoading] = useState(false)
  const {posts,  error} = usePostStore()
  const [postData, setPostData] =  useState()
  const {clubs, fetchClub} =  useClubStore()
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        fetchClub()
        setLoading(false);
        const filterPost =  posts.filter((item) =>item.status == "club")
        setPostData(filterPost)
        setClubsData(clubs)
        console.log(clubs);
      } catch (error) {
        setLoading(false);

        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [posts, error, clubs]);
  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          {/* <Text style={styles.statNumber}>{item.followers}</Text> */}
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          {/* <Text style={styles.statNumber}>{item.following}</Text> */}
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.socialIcons}>
        {item.social.map((iconName, index) => (
          <Ionicons key={index} name={iconName} size={24} color={getSocialIconColor(iconName)} style={styles.icon} />
        ))}
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button,{backgroundColor:PRIMARYCOLOR}]}>
          <Text style={styles.buttonText}>Voir plus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, {color:PRIMARYCOLOR}]}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const getSocialIconColor = (iconName) => {
    switch (iconName) {
      case 'logo-facebook':
        return '#3b5998';
      case 'logo-twitter':
        return '#1da1f2';
      case 'logo-instagram':
        return '#e4405f';
      default:
        return '#000'; 
    }
  };


  return (
   <View style={{gap:10}} >
    
   <View style={{padding:10}}>
     <FlatList
    data={[...Array(5).keys()]}
    renderItem={()=>
      
        <Skeleton  animation='wave'  width={250} height={300} style={{marginRight:10, borderRadius:10, backgroundColor:"#999"}} />
    }
    keyExtractor={(item)=>item.key}
    horizontal
    
    
    />
   </View>: 
    <FlatList 
  data={clubs}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.flatListContainer}
  horizontal
/>
{loading?<PostSkeleton/>: <AnnonceCard posts={postData}/>}
   </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height:"auto"
  },
  header: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
      textAlign:"center",
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StudentClubScreen;
