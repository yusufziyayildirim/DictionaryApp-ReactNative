import React from 'react'
import { View, Text } from 'react-native'

const SimpleCardContainer = ({ children }) => {
  return (
      <View style={{ backgroundColor: "white", borderRadius: 8, padding:16, marginTop: 6 }}>
          {children}
      </View>
  )
}

const SimpleCardTitle = ({ children }) => {
  return (
    <Text style={{ fontSize: 16, fontWeight: "bold", }}>
      {children}
    </Text>
  )
}


export { SimpleCardContainer, SimpleCardTitle };