import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Avatar } from '@rneui/base';
import { PRIMARYCOLOR } from '../../../assets/Constant/COLOR';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';
import AnimatedButton from '../../component/AnimatedBtn';
import { useAnnonceStore, useUserStore } from '../../../store/zustand';

const Reception = () => {
  const { annonces, fetchAnnonces } = useAnnonceStore();
  const { user } = useUserStore();

  useEffect(() => {
    fetchAnnonces();
  }, [fetchAnnonces]);

  const scrollY = useSharedValue(0);
  const navigation = useNavigation();

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const renderItem = ({ item }) => {
    const sender = typeof item.sender === 'string' ? JSON.parse(item.sender) : item.sender;

    return (
      <TouchableOpacity key={item.id} onPress={() => navigation.navigate("AnnonceDetail", { item })}>
        <View style={styles.item}>
          <Avatar title={sender.name[0]} size="large" avatarStyle={{ backgroundColor: PRIMARYCOLOR }} />
          <View style={styles.info}>
            <View style={styles.header}>
              <Text style={styles.name}>{item.subject}</Text>
              <Text style={styles.date}>{moment(item.timestamp.seconds * 1000).format('HH:mm')}</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.lastMessage}>{item.body.slice(0, 100)}</Text>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>2</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>

    <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16} style={styles.scrollView}>
      <FlatList
        data={annonces}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
      />
      
    </Animated.ScrollView>
    <AnimatedButton scrollY={scrollY} onPress={() => navigation.navigate("annonceSend")} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    gap: 10,
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
