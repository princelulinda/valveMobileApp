import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import moment from 'moment';

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
    id: '2',
    name: 'Fongolab',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    lastMessage: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    date: '2024-06-11T15:12:00.000Z',
    unreadCount: 5,
  },
];

const Reception = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
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
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
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
