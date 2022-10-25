import { Text } from 'react-native'

import { COLORS } from "../utils/colors";

const LoaderText = ({ width, mt }) => {
  return (
    <Text style={{ backgroundColor: COLORS.light, width: width, height: 16, marginTop: mt }} />
  )
}

export default LoaderText