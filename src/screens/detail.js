import SafeAreaView from "react-native-safe-area-view";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { COLORS } from "../utils/colors";
import { ActionButton, ActionButtonTitle } from "../components/ActionButton";
import { Sound, Favorite, Hand, FavoriteSolid } from '../components/icons'
import DetailSummaryItem from "../components/DetailSummaryItem";
import LoaderText from "../components/LoaderText";
import { useEffect, useState } from "react";

function DetailView({ route, favoritesData, setFavoritesData }) {
  const keyword = route.params?.title;
  const [data, setData] = useState(null);
  const [isFav, setIsFav] = useState(false);

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json();
    setData(data[0]);
  }

  const addFavData = (keyword) => {
    setIsFav(true)
    setFavoritesData([
      { madde: keyword },
      ...favoritesData
    ]);
  }
  const delFavData = () => {
    setIsFav(false)
    setFavoritesData(
      favoritesData.filter(favData => favData.madde.toLowerCase() !== keyword)
    );
  }

  useEffect(() => {
    getDetailData()
    favoritesData.map(favData => {
      if (favData.madde.toLowerCase() == keyword) {
        setIsFav(true)
      }
    })
  }, [])

  return (
    <View style={{ backgroundColor: COLORS.softGray, flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />

      <ScrollView style={{ padding: 16 }}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>{keyword}</Text>
          {data?.telaffuz || data?.lisan ? (
            <Text style={{ color: COLORS.textLight }}>
              {data?.telaffuz && data?.lisan}
            </Text>
          ) : null}
          <Text style={{ color: COLORS.textLight, marginTop: 6 }}>{data?.telaffuz && data?.telaffuz} {data?.lisan}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: 114 }}>
            <ActionButton disabled={!data}>
              <Sound width={24} height={24} color={COLORS.textDark} />
            </ActionButton>
            {isFav ? (
              <ActionButton onPress={() => delFavData(keyword)}>
                <FavoriteSolid width={24} height={24} color={COLORS.textDark} />
              </ActionButton>
            ) : (
              <ActionButton onPress={() => addFavData(keyword)}>
                <Favorite width={24} height={24} color={COLORS.textDark} />
              </ActionButton>
            )}
          </View>
          <ActionButton>
            <Hand width={24} height={24} color={COLORS.textDark} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </View>

        <View style={{ marginTop: 32 }}>
          {data ?
            data.anlamlarListe.map(item => (
              <DetailSummaryItem
                key={item.anlam_sira}
                data={item}
                border={item.anlam_sira != data.anlamlarListe.length ? true : false}
              />
            )) : (
              [1, 2, 3].map(i => (
                <DetailSummaryItem key={i} border={i == 3 ? false : true}>
                  <LoaderText width={160} />
                  <LoaderText width={240} mt={10} />
                </DetailSummaryItem>
              ))
            )
          }
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailView;
