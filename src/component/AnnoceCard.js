import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Comments from './BottomSheet';
import CommentsComponent from './commentContenent';

const posts = [
  {
    id: 1,
    author: {
      name: 'Fongolab',
      email: 'Fongolab.com',
      avatar: 'assets/logoFongolab.png',
    },
    date: '13 juin 2024',
    title: 'Nouvelle publication',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: 15,
    comments: 4,
  },
];

const AnnonceCard = () => {
  const refRBSheet = useRef();
  const RenderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: item.author.avatar }}
          />
          <View>
            <Text style={styles.author}>{item.author.name}</Text>
            <Text style={styles.email}>{item.author.email}</Text>
          </View>
        </View>
        <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Image
          style={styles.itemImage}
          source={{ uri: item.image }}
        />
        <View style={styles.actionBar}>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name="heart-o" size={24} color="#333333" />
            <Text style={styles.iconText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={()=> refRBSheet.current.open()}>
            <FontAwesome name="comment-o" size={24} color="#333333" />
            <Text style={styles.iconText}>{item.comments}</Text>
          </TouchableOpacity>
        </View>
        <Comments refRBSheet={refRBSheet} children={<CommentsComponent/>}/>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
    color: '#666666',
  },
  date: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  actionBar: {
    flexDirection: 'row',
    gap:20
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
  },
});

export default AnnonceCard;
