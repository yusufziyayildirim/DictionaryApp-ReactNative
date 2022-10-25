import { View, Text } from "react-native";

import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import TitleCardList from "../components/TitleCardList";
import { Vector, History } from "../components/icons";

import { COLORS } from "../utils/colors";

function HistoryView({ navigation, historyData }) {
  return (
    <View style={{ backgroundColor: COLORS.softGray, flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      {historyData.length > 0 ? (
        <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
          <TitleCardList data={historyData} navigation={navigation} icon={<Vector color={COLORS.red} />} />
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <History color={COLORS.textLight} />
          <Text style={{ fontWeight: "600", color: COLORS.textMedium, marginTop: 14 }}>Henüz geçmiş yok </Text>
        </View>
      )}

    </View>
  );
}


export default HistoryView;
