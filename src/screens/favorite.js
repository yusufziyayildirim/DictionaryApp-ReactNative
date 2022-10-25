import { View, Text } from "react-native";

import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import TitleCardList from "../components/TitleCardList";
import {Vector, Favorite} from "../components/icons";

import { COLORS } from "../utils/colors";


function FavoriteView({ navigation, favoritesData }) {
  return (
    <View style={{ backgroundColor: COLORS.softGray, flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {favoritesData.length > 0 ? (
        <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
          <TitleCardList data={favoritesData} navigation={navigation} icon={<Vector color={COLORS.red} />} />
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
