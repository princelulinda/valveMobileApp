import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AnnonceDetail = ({ route }) => {
  const { item } = route.params;
  const formattedDate = new Date(item.timestamp.seconds * 1000).toLocaleDateString();

  return (
    <View style={styles.container}>
      {
        item.fileURL&&(<Image source={{ uri: item.fileURL }} style={styles.image} />)
      }
      
      <Text style={styles.title}>{item.subject}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.description}>{item.body}</Text>
      <Text style={styles.sender}>Envoyé par: {item.name}, {item.status}, Matricule: {item.matricule}, Promotion: {item.promotion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  department: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  sender: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
  },
});

export default AnnonceDetail;
