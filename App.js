import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// components
import Banner from './Components/Headers'
import MyTabs from './Components/Footer'
import ChatUI from './Components/Chat'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Banner />
        </View>

        <View>
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              marginTop: 8
            }}
          >
            Title
          </Text>
        </View>
        <View style={{ height: 800, fontSize: 45 }}>
          <ChatUI />
          <MyTabs />
        </View>
        <View style={styles.footers}>
          <StatusBar style='#0c494b' />
        </View>
      </View>
    </SafeAreaProvider>
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
  footers: {
    bottom: 0
  }
})
