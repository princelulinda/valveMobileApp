import { Avatar, Icon } from '@rneui/base';
import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { BLACKCOLOR, PRIMARYCOLOR } from '../../assets/Constant/COLOR';


const CommentsComponent = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      avatarUrl: 'https://example.com/avatar1.jpg',
      username: 'Alice',
      date: '13 juin 2024',
      content: 'Premier commentaire!',
    },
    {
      id: 2,
      avatarUrl: 'https://example.com/avatar2.jpg',
      username: 'Bob',
      date: '14 juin 2024',
      content: 'Un autre commentaire...',
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }
    const newCommentObject = {
      id: comments.length + 1,
      avatarUrl: 'https://example.com/avatar3.jpg',
      username: 'Utilisateur',
      date: new Date().toLocaleDateString(),
      content: newComment,
    };
    setComments([...comments, newCommentObject]);
    setNewComment('');
  };

  const renderItem = ({ item }) => {
    return(
      <View style={styles.commentContainer}>
        <Avatar
          rounded
          title={item.username[0]}
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
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
    backgroundColor:PRIMARYCOLOR
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
