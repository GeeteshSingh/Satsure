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

  const sortedCategories =
    data?.categories?.slice()?.sort((a, b) => a.value - b.value) ?? []
  const minWidth = Number(sortedCategories[0]?.value ?? 0)
  const maxWidth = Number(
    sortedCategories[sortedCategories.length - 1]?.value ?? 0
  )

  return (
    <View style={{ flex: 1, padding: 25 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              marginTop: 8
            }}
          >
            {data?.title}
          </Text>
          <FlatList
            data={data?.categories}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Card
                style={{
                  backgroundColor: item.color,
                  padding: 20,
                  margin: 5,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  maxWidth: `${50 + (Number(item.value) - minWidth) / 100}%`
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 16 }}>Value: {item.value}</Text>
              </Card>
            )}
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ChatUI
