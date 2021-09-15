import React from 'react'
// import { Header } from 'react-native-elements'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'
import { height } from 'styled-system'

const Banner = () => {
  return (
    <View
      style={{
        backgroundColor: '#116366',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        top: 0
      }}
    >
      <Ionicons name='md-reorder-three' size={24} color='white' />
      <Ionicons name='person' size={24} color='white' />
      <Text style={{ color: '#fff' }}>Name</Text>
      {/* <Divider orientation='vertical' width={1} color='#fff' /> */}
      <Text style={{ color: '#fff', }}>|</Text>
      <FontAwesome name='phone' size={24} color='white' />
      <Text style={{ color: '#fff' }}>Mobile No.</Text>
    </View>
  )
}
export default Banner
