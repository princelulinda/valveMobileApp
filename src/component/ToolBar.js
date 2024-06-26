import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import Avatar from './Avatar'

const styles = {
  container: {
    width: '100%',
    height: 92,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    padding: '0 11px',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    padding: '0 8px',
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#f0f0f0',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },
  menuText: {
    paddingLeft: 11,
    fontWeight: '500',
    fontSize: 12,
  },
  separator: {
    width: 1,
    height: 26,
    backgroundColor: '#f0f0f0',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
}

const ToolBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Avatar source={require('../../assets/user1.jpg')} />
          <TextInput style={styles.input} placeholder="What's on your mind?" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <View style={styles.menu}>
            <Ionicons name='ios-videocam' size={22} color='#F44337' />
            <Text style={styles.menuText}>Live</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.menu}>
            <MaterialIcons name='photo-size-select-actual' size={20} color='#4CAF50' />
            <Text style={styles.menuText}>Photo</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.menu}>
            <MaterialCommunityIcons name='video-plus' size={22} color='#E141FC' />
            <Text style={styles.menuText}>Room</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomDivider} />
    </>
  )
}

export default ToolBar
