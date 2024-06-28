import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import axios from 'axios';

const pdfFiles = [
  { id: '1', name: 'Document 1', description: 'Description du Document 1', uri: 'http://www.pdf995.com/samples/pdf.pdf' },
  { id: '2', name: 'Document 2', description: 'Description du Document 2', uri: 'http://www.pdf995.com/samples/pdf.pdf' },
];
export default function Letteer() {
  const [thumbnails, setThumbnails] = useState({});

  useEffect(() => {
    const generateThumbnails = async () => {
      const thumbs = {};
      for (const file of pdfFiles) {
        try {
          const { uri } = file;
           const req = await axios.get(uri)
           const localFile = await req.blob()
           console.log(req);
          const page = PDFPage.create().setMediaBox(200, 200).drawImage(localFile, 'jpeg', {
            x: 5,
            y: 5,
            width: 190,
            height: 190,
          });
          const pdfPath = `${RNFetchBlob.fs.dirs.CacheDir}/${file.id}_thumb.pdf`;
          await PDFDocument.create(pdfPath).addPages(page).write();
          thumbs[file.id] = pdfPath;
        } catch (error) {
          console.error('Error generating thumbnail for file', file.id, error);
        }
      }
      setThumbnails(thumbs);
    };

    generateThumbnails();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {thumbnails[item.id] ? (
        <Image source={{ uri: `file://${thumbnails[item.id]}` }} style={styles.thumbnail} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pdfFiles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  placeholder: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});