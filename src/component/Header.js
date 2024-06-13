import React, { useState } from 'react';
import { View } from 'react-native';
import { Header, Icon } from '@rneui/themed';
import { BLACKCOLOR, PRIMARYCOLOR } from '../../assets/Constant/COLOR';
import HadleDotsTree from './HadleDotsTree';

const AppHeader = () => {
  const [OnToggleTreeDots, setonToggleTreeDots] = useState(false)
  return (
    <>
    <Header
      leftComponent={
        { text: 'Valve', style: { color: PRIMARYCOLOR, fontSize: 20, fontWeight:"bold" } }
      }

      rightComponent={
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color="#13c7ee"
          onPress={() =>setonToggleTreeDots(!OnToggleTreeDots) }
        />
      }
      containerStyle={{
        backgroundColor: BLACKCOLOR,
        justifyContent: 'space-around',
      }}
    />
    {OnToggleTreeDots?<HadleDotsTree/>:" "}
    </>
  );
};

export default AppHeader;
