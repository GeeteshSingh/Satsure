import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// components
import Banner from './Components/Headers'
import MyTabs from './Components/Footer'
import ChatUI from './Components/Chat'


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Banner />
      </View>
      <View style={{height:800, fontSize:45}}>
        <ChatUI />
      </View>
      <View>
        <MyTabs />
      </View>
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontFamily: 'sans-serif'
  },
  footer:{
    bottom:0
  }
})
