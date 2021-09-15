import React from 'react'
import { Header } from 'react-native-elements'

const Banner = () => {
  return (
    <Header
      backgroundColor='#116366'
      placement='left'
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}
export default Banner
