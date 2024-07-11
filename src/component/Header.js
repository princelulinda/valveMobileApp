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
        { text: 'Valve', style: { color: BLACKCOLOR, fontSize: 20, fontWeight:"bold" } }
      }

      rightComponent={
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color="#333"
          onPress={() =>setonToggleTreeDots(!OnToggleTreeDots) }
        />
      }
      containerStyle={{
        backgroundColor: PRIMARYCOLOR,
        justifyContent: 'space-around',
      }}
    />
    {OnToggleTreeDots?<HadleDotsTree/>:" "}
    </>
  );
};

export default AppHeader;
