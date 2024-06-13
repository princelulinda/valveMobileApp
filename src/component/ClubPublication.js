// src/components/ImageGrid.js

import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const images = [
  { id: '1', src: 'https://via.placeholder.com/150' },
  { id: '2', src: 'https://via.placeholder.com/150' },
  { id: '3', src: 'https://via.placeholder.com/150' },
  { id: '4', src: 'https://via.placeholder.com/150' },
  { id: '5', src: 'https://via.placeholder.com/150' },
  { id: '6', src: 'https://via.placeholder.com/150' },
];

const numColumns = 3;
const imageSize = Dimensions.get('window').width / numColumns;

const ClubPublication = () => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.src }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: imageSize - 10,
    height: imageSize - 10,
    borderRadius: 10,
  },
});

export default ClubPublication;
