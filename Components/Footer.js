import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function MyTabs() {
  return (
    <View
      style={{
        backgroundColor: '#116366',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 25
      }}
    >
      {/* <Text>Home</Text> */}
      <MaterialIcons name='home-filled' size={24} color='white' />
      <Divider orientation='vertical' width={1} color='#fff' />
      <FontAwesome name='phone' size={24} color='white' />
      <Divider orientation='vertical' width={1} color='#fff' />
      <Ionicons name='stats-chart' size={24} color='white' />
      <Divider orientation='vertical' width={1} color='#fff' />
      <Ionicons name='md-location-sharp' size={24} color='white' />
    </View>
  )
}
