import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

// components
import Banner from './Components/Headers'
import MyTabs from './Components/Footer'
import ChatUI from './Components/Chat'

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Banner />
        <ChatUI />
        <MyTabs />
        <StatusBar style='light' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#116366',
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  text: {
    fontSize: 20,
    fontFamily: 'sans-serif'
  },
  footers: {
    bottom: 0,
    marginTop: 20
  }
})
