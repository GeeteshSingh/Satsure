import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

const ChatUI = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const SatSureAPI = async () => {
    try {
      const response = await fetch(
        'https://3cffb3ae-4dff-4a7b-a4af-5dea6a32f7f5.mock.pstmn.io/satsure-test'
      )
      const json = await response.json()
      setData(json.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    SatSureAPI()
  }, [])

  return (
    <View style={{ flex: 1, padding: 24, height: 70 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data?.categories}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card
              style={{
                backgroundColor: item.color,
                padding: 20,
                margin: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5
              }}
            >
              <Text style={{ fontSize: 20 }}>
                {item.title}, {item.categories}
              </Text>
            </Card>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ChatUI
