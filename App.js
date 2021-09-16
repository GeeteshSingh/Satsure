import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// components
import Banner from './Components/Headers'
import MyTabs from './Components/Footer'
import ChatUI from './Components/Chat'
import { marginTop } from 'styled-system'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Banner />
        </View>

        <View>
         
        </View>
        <View style={{ height: '88%', fontSize: 45 }}>
          <ChatUI />
        </View>
        <View style={styles.footers}>
          <MyTabs />

          <StatusBar style='#0c494b' />
        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
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
