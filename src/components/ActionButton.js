import React from 'react'
import { TouchableOpacity, Text, View } from "react-native";
import { COLORS } from '../utils/colors';

const ActionButton = ({ children, disabled, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 999,
        minWidth: 48,
        alignSelf: 'flex-start',
        height: 48,
        shadowColor: "#000",
        shadowRadius: 4,
        shadowOpacity: 0.16,
        paddingHorizontal: 8,
        shadowOffset: {
          width: 0,
          height: 2,
        }
      }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

const ActionButtonTitle = ({ children }) => {
  return (
    <Text style={{fontSize:14, fontWeight: "bold", color: COLORS.textLight, marginLeft:8}}>
      {children}
    </Text>
  )
}

export { ActionButton, ActionButtonTitle }