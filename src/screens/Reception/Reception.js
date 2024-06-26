import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Avatar } from '@rneui/base';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import AnimatedButton from '../../component/AnimatedBtn';
const messages = [
  {
    id: '1',
    name: 'Direction pedagogique',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    date: '2024-06-11T14:48:00.000Z',
    unreadCount: 2,
  },
  {
    id: '2adsd',
    name: 'Fongolab',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    lastMessage: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    date: '2024-06-11T15:12:00.000Z',
    unreadCount: 5,
  },

  {
    id: 'vdv',
    name: 'Direction pedagogique',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    date: '2024-06-11T14:48:00.000Z',
    unreadCount: 2,
  },
  {
    id: 'ew',
    name: 'Fongolab',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    lastMessage: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    date: '2024-06-11T15:12:00.000Z',
    unreadCount: 5,
  },
  {
    id: 'df',
    name: 'Direction pedagogique',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum",
    date: '2024-06-11T14:48:00.000Z',
    unreadCount: 2,
  },
  {
    id: 'we',
    name: 'Fongolab',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    lastMessage: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    date: '2024-06-11T15:12:00.000Z',
    unreadCount: 5,
  },
];

const Reception = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
     console.log(scrollY)
  });
  const navigation =  useNavigation()
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("AnnonceDetail", {item:item})}>
        <View style={styles.item}>
      <Avatar title={item.name[0]} size={"large"} avatarStyle={{backgroundColor:PRIMARYCOLOR}}/>
      <View style={styles.info}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{moment(item.date).format('HH:mm')}</Text>
        </View>
        <View style={styles.messageInfo}>
          <Text style={styles.lastMessage}>{item.lastMessage.slice(0,100)}</Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16} style={styles.scrollView}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
      />
    <AnimatedButton scrollY={scrollY} onPress={()=>navigation.navigate("annonceSend")} />
  </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: '#fff',
    },
 
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    gap:10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  messageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#25D366',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Reception;
