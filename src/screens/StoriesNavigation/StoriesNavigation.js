import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StoryContainer } from 'react-native-stories-view';


const StoriesNavigation = ({ route }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (route.params && route.params.stories) {
      const storyImages = route.params.stories.map((item) => item.image);
      setImages(storyImages);
    }
  }, [route.params]);


  return (
    <StoryContainer
      visible={true}
      enableProgress={true}
      images={images}
      duration={20}
      containerStyle={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default StoriesNavigation;

const styles = StyleSheet.create({});
