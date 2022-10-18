import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../utils/colors'

const DetailSummaryItemContainer = ({ children, border = true }) => {
  return (
    <View style={{backgroundColor:"white", paddingHorizontal:28, paddingVertical:20, position:"relative"}}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{marginLeft:-14, marginRight:8, color:COLORS.textLight}}>1</Text>
        <Text style={{color: COLORS.red}} >İSİM</Text>
      </View>
      <View style={{marginTop:8}}>
        {children}
      </View>
      {border && (
        <View style={{position:"absolute", left:12, right: 12, bottom: 0, height:1, backgroundColor: COLORS.light}}>

        </View>
      )}
    </View>
  )
}

const DetailSummaryItemTitle = ({ children }) => {
  return (
    <Text style={{fontWeight:"600"}}>
      {children}
    </Text>
  )
}

const DetailSummaryItemSummary = ({ children }) => {
  return (
    <Text style={{fontWeight:"500", marginHorizontal:10, color: COLORS.textLight, marginTop:12}}>
      {children}
    </Text>
  )
}

export { DetailSummaryItemContainer, DetailSummaryItemTitle, DetailSummaryItemSummary }