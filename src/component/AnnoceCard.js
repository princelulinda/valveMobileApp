import { ListItem } from '@rneui/base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Annonce 1',
    date: '2024-06-10',
    department: 'Collège des étudiants',
    imageUrl: 'https://placehold.co/600x400',
    description:" Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero ...Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero "
  },
  {
    id: '2',
    title: 'Annonce 2',
    date: '2024-06-11',
    department: 'Direction académique',
    imageUrl: 'https://placehold.co/600x400',
    description:"Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero"
  },
  {
    id: '3',
    title: 'Annonce 3',
    date: '2024-06-10',
    department: 'Collège des étudiants',
    imageUrl: 'https://placehold.co/600x400',
    description:" Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero ...Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero "
  },
  {
    id: '4',
    title: 'Annonce 4',
    date: '2024-06-11',
    department: 'Direction académique',
    imageUrl: 'https://placehold.co/600x400',
    description:"Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus Tullius Cicero"
  },
];

const AnnonceCard = () => {
  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.date}</ListItem.Subtitle>
        <Text style={styles.department}>{item.department}</Text>
        <Text style={styles.descriptionText}>{item.description.slice(0, 100)}</Text>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  department: {
    color: 'gray',
    fontSize: 12,
  },
  descriptionText:{
    fontSize:12
  }
});

export default AnnonceCard;
