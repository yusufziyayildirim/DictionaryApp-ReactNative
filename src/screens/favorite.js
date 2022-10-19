import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { View, Text } from "react-native";
import { COLORS } from "../utils/colors";
import TitleCardList from "../components/TitleCardList";
import SvgVector from "../components/icons/Vector";
import { Favorite } from '../components/icons'


function FavoriteView({ navigation }) {

  const FavoriteDATA = [
    // {
    //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //   title: 'yokoğluyok',
    //   summary: 'acaklana 1'
    // },
    // {
    //   id: '3ac68afc-c685-48d3-a4f8-fbd91aa97f63',
    //   title: 'milliyet',
    //   summary: 'acaklang 2'
    // },
    // {
    //   id: "2",
    //   title: 'Third Item 3',
    //   summary: 'acaklang 3'
    // }
  ]
  return (
    <View style={{ backgroundColor: COLORS.softGray, flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {FavoriteDATA.length > 0 ? (
        <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
          <TitleCardList data={FavoriteDATA} navigation={navigation} icon={<SvgVector color={COLORS.red} />} />
        </View>
      ) : (
        <View style={{ flex: 1, alignItems:"center", justifyContent:"center" }}>
          <Favorite color={COLORS.textLight} />
          <Text style={{fontWeight: "600", color:COLORS.textMedium, marginTop: 14}}>Henüz Favori yok </Text>
        </View>
      )}

    </View>
  );
}

export default FavoriteView;
