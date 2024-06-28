import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from './Avatar';
import { db } from '../../.firebase/firebaseConf';
import { collection, getDocs } from 'firebase/firestore';
import PostSkeleton from './PostSkeleton';
import moment from 'moment';
import { PRIMARYCOLOR } from '../../assets/Constant/COLOR';
import CommentsComponent from './commentContenent';
import BottomSheet from './BottomSheet';


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMore, setViewMore] = useState(false)
  const refRBSheet = useRef()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
const a = new Date().toLocaleTimeString()
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Avatar source={{ uri: item.user.photoURL }} />
          <View style={styles.userInfo}>
            <Text style={styles.user}>{item.user.name}</Text>
            <View style={styles.row}>
              <Text style={styles.time}>{new Date(item.createdAt.seconds).toLocaleTimeString()}</Text>
              <Entypo name='dot-single' size={12} color='#747476' />
              <Entypo name='globe' size={10} color='#747476' />
            </View>
          </View>
        </View>
        <Entypo name='dots-three-horizontal' size={15} color='#222121' />
      </View>
      <View style={{flexDirection:"row", gap:10}}>
      <Text style={styles.post}>{!viewMore?item.description.slice(0,100): item.description}
        
      <TouchableOpacity onPress={()=>setViewMore(!viewMore)}>
         <Text style={{color:PRIMARYCOLOR}}> {viewMore?"fermer":"voir plus"}</Text>
      </TouchableOpacity>
      </Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.photo} />

      <View style={styles.footer}>
        <View style={styles.footerCount}>
          <View style={styles.row}>
            <View style={styles.iconCount}>
              <AntDesign name='like1' size={12} color='#FFFFFF' />
            </View>
            <Text style={styles.textCount}>88 likes</Text>
          </View>
          <Text style={styles.textCount}>2k comments</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.footerMenu}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.icon}>
              <AntDesign name='like2' size={20} color='#424040' />
            </View>
            <Text style={styles.text}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>refRBSheet.current.open()}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
            </View>
            <Text style={styles.text}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
            </View>
            <Text style={styles.text}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomDivider} />
      <BottomSheet refRBSheet={refRBSheet} children={<CommentsComponent postId={item.id}/>} />
    </View>
  );



  return (
 <>
 {
  loading?   <FlatList
  data={[...Array(5).keys()]}
  renderItem={()=><PostSkeleton/>}
  keyExtractor={(item, index) => index}

/>:
 <FlatList
 data={posts}
 renderItem={renderItem}
 keyExtractor={(item)=>item.id}
 />

 }
 </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingHorizontal: 11,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    paddingLeft: 10,
  },
  user: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222121',
  },
  time: {
    fontSize: 9,
    color: '#747476',
  },
  post: {
    fontSize: 12,
    color: '#222121',
    lineHeight: 16,
    paddingHorizontal: 11,
  },
  photo: {
    marginTop: 9,
    width: '100%',
    height: 300,
  },
  footer: {
    paddingHorizontal: 11,
  },
  footerCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  iconCount: {
    backgroundColor: '#1878f3',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  textCount: {
    fontSize: 11,
    color: '#424040',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f9f9f9',
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  button: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    color: '#424040',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
});

export default Feed;
