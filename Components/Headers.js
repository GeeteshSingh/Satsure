import React, { useEffect, useState } from 'react'
// import { Header } from 'react-native-elements'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'
import { flex, height, left, right } from 'styled-system'

const Banner = () => {
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
    <View
      style={{
        backgroundColor: '#116366',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-evenly',
        height: 70,
        top: 0,
        flex: 1
      }}
    >
      <Ionicons name='md-reorder-three' size={24} color='white' />
      <Ionicons name='person' size={24} color='white' />
      <Text style={{ color: '#fff', paddingRight: 12 }}>{data.name}</Text>
      {/* <Divider orientation='vertical' width={1} color='#fff' /> */}
      <Text style={{ color: '#fff' }}>|</Text>
      <FontAwesome name='phone' size={24} color='white' />
      <Text style={{ color: '#fff', textAlign: left }}>{data.mobileNo}</Text>
    </View>
  )
}
export default Banner
