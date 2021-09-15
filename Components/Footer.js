import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function MyTabs() {
  return (
    <View
      style={{
        backgroundColor: '#116366',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:10,
        bottom:0,
      }}
    >
      {/* <Text>Home</Text> */}
      <MaterialIcons name='home-filled' size={24} color='white' />
      <Text style={{ color: '#fff' }}>|</Text>
      <FontAwesome name='phone' size={24} color='white' />
      <Text style={{ color: '#fff' }}>|</Text>
      <Ionicons name='stats-chart' size={24} color='white' />
      <Text style={{ color: '#fff' }}>|</Text>
      <Ionicons name='md-location-sharp' size={24} color='white' />
    </View>
  )
}
