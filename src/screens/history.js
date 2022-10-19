import { View, Text } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { COLORS } from "../utils/colors";
import TitleCardList from "../components/TitleCardList";
import SvgVector from "../components/icons/Vector";
import { History } from '../components/icons'

const HistoryDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Adem',
    summary: 'acaklana 1'
  },
  {
    id: '3ac68afc-c685-48d3-a4f8-fbd91aa97f63',
    title: 'Dede',
    summary: 'acaklang 2'
  },
  {
    id: "2",
    title: 'Göze gelmek',
    summary: 'acaklang 3'
  }
]

function HistoryView({ navigation }) {
  return (
    <View style={{ backgroundColor: COLORS.softGray, flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {HistoryDATA.length > 0 ? (
        <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
          <TitleCardList data={HistoryDATA} navigation={navigation} icon={<SvgVector color={COLORS.red} />} />
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <History color={COLORS.textLight} />
          <Text style={{ fontWeight: "600", color: COLORS.textMedium, marginTop: 14 }}>Henüz Favori yok </Text>
        </View>
      )}

    </View>
  );
}


export default HistoryView;
