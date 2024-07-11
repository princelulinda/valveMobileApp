import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Avatar, Icon } from '@rneui/base';
import { BLACKCOLOR, PRIMARYCOLOR } from '../../assets/Constant/COLOR';
import { db } from '../../.firebase/firebaseConf';
import { addDoc, collection, getDocs, where } from 'firebase/firestore';
import { useUserStore } from '../../store/zustand';
import { fetchConfig } from 'firebase/remote-config';

const CommentsComponent = ({postId}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const {user} = useUserStore()
const [getCommentUser, setCommentsUser] = useState("")
  useEffect(() => {
   async function fetchPosts (){
    const unsubscribe = await getDocs(collection(db,'comments'), where(
      "postId", "==", postId
    ))
    const fetchedComments =  unsubscribe.docs.map(doc => ({
      ...doc.data(),
   }))

        setComments(fetchedComments);

       
   }
   fetchPosts()
  }, []);

  const handleAddComment = async () => {
    if (newComment.trim() === '') {
      return;
    }
    const newCommentObject = {
      date: new Date().toLocaleDateString(),
      content: newComment,
      postId:postId,
      userId:user.matricule
    };
    
    try {
      await addDoc(collection(db,'comments'),newCommentObject)
      setNewComment('');
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };
  useEffect(()=>{
   async function fetchUserComment(){
      const userScribe = await getDocs(collection(db,'users'), where(
        "matricule", "==", postId
      ))
     const userCommentContent = userScribe.map((doc)=>{
        return doc.data()
      })
        setCommentsUser(userCommentContent)
        console.log(item.id);
    }
  })
    useEffect(()=>{
   async function fetchUserComment(){
      const userScribe = await getDocs(collection(db,'users'))
     const userCommentContent = userScribe.docs.map((doc)=>{
        return doc.data()
      })
        setCommentsUser(userCommentContent)
    }
    fetchUserComment()
  }, [comments])
  const renderItem = async ({ item }) => {
      return(
        <View style={styles.commentContainer}>
        <Avatar
          rounded
          title={"item.username[0]"}
          size="small"
          containerStyle={styles.avatar}
        />
        <View style={styles.commentDetails}>
          <View style={styles.header}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </View>
      )
    }
  

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.content}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Ajouter un commentaire..."
          multiline
          numberOfLines={3}
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
        />
        <TouchableOpacity onPress={handleAddComment}>
          <Icon name="send" size={30} color={BLACKCOLOR} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  avatar: {
    marginRight: 10,
    backgroundColor: PRIMARYCOLOR,
  },
  commentDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  date: {
    color: '#777',
  },
  content: {
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendIcon: {
    padding: 10,
  },
});

export default CommentsComponent;
