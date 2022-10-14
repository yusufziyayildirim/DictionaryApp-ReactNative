import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../utils/colors'

const CardContainer = ({ children, props }) => {
  return (
    // <TouchableOpacity>
      <View style={{ backgroundColor: "white", borderRadius: 8, paddingVertical: 16, paddingHorizontal: 12, marginTop: 10 }}>
        <View style={{ borderLeftWidth: 3, paddingLeft: 12, borderLeftColor: COLORS.light }}>
          {children}
        </View>
      </View>
    // </TouchableOpacity>
  )
}

const CardTitle = ({ children }) => {
  return (
    <Text style={{ fontSize: 18, fontWeight: "bold", }}>
      {children}
    </Text>
  )
}

const CardSummary = ({ children }) => {
  return (
    <Text style={{ fontSize: 14, marginTop: 8, color: COLORS.textMedium }}>
      {children}
    </Text>
  )
}

export { CardContainer, CardTitle, CardSummary };