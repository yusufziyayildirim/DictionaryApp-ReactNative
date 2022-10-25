import { View, Text } from 'react-native'

import { COLORS } from '../utils/colors'

const DetailSummaryItem = ({ children, data, border = true }) => {
  const type = (data?.ozelliklerListe && data.ozelliklerListe.map(item => item.tam_adi)) || ['isim']

  return (
    <View style={{ backgroundColor: "white", paddingHorizontal: 28, paddingVertical: 20, position: "relative" }}>
      {data ? (
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: -14, marginRight: 8, color: COLORS.textLight }}>
              {data.anlam_sira}
            </Text>
            <Text style={{ color: COLORS.red }} >{type.join(', ')}</Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ fontWeight: '600' }}>
              {data.anlam}
            </Text>
            {data.orneklerListe &&
              data.orneklerListe.map(ornek => (
                <View key={ornek.ornek_id}>
                  <Text style={{ marginLeft: 10, marginTop: 10, color: COLORS.textLight, fontWeight: '500' }}>
                    {ornek.ornek}{' '}
                    <Text style={{ fontWeight: '700', color: COLORS.textLight }}>
                      {ornek.yazar_id !== '0' && `- ${ornek.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </View>
              ))}
          </View>
        </View>
      ) : (
        children
      )}

      {border && (
        <View style={{ position: "absolute", left: 12, right: 12, bottom: 0, height: 1, backgroundColor: COLORS.light }} />
      )}
    </View>
  )
}

export default DetailSummaryItem