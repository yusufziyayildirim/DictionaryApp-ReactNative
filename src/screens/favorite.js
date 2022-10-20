import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { View, Text } from "react-native";
import { COLORS } from "../utils/colors";
import TitleCardList from "../components/TitleCardList";
import SvgVector from "../components/icons/Vector";
import { Favorite } from '../components/icons'


function FavoriteView({ navigation, favoritesData, setFavoritesData }) {
  return (
    <View style={{ backgroundColor: COLORS.softGray, flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {favoritesData.length > 0 ? (
        <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
          <TitleCardList data={favoritesData} navigation={navigation} icon={<SvgVector color={COLORS.red} />} />
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
