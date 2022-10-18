import SafeAreaView from "react-native-safe-area-view";
import { View, Text, ScrollView } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { COLORS } from "../utils/colors";
import { ActionButton, ActionButtonTitle } from "../components/ActionButton";
import { SoundSolid, Favorite, Hand } from '../components/icons'
import { DetailSummaryItemContainer, DetailSummaryItemTitle, DetailSummaryItemSummary } from "../components/DetailSummaryItem";

function DetailView() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.softGray, flex: 1}}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <ScrollView style={{padding: 16 }}>

        <View>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>Kalem</Text>
          <Text style={{ color: COLORS.textLight, marginTop: 6 }}>Arapça kalem</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: 114 }}>
            <ActionButton>
              <SoundSolid width={24} height={24} color={COLORS.red} />
            </ActionButton>
            <ActionButton>
              <Favorite width={24} height={24} color={COLORS.textDark} />
            </ActionButton>
          </View>
          <ActionButton>
            <Hand width={24} height={24} color={COLORS.textDark} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </View>

        <View style={{ marginTop: 32 }}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:</DetailSummaryItemTitle>
            <DetailSummaryItemSummary>"Kağıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border={false}>
            <DetailSummaryItemTitle>Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:</DetailSummaryItemTitle>
            <DetailSummaryItemSummary>"Kağıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay</DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default DetailView;
