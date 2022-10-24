import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { COLORS } from "../utils/colors";
import { ActionButton, ActionButtonTitle } from "../components/ActionButton";
import { Sound, Favorite, Hand, FavoriteSolid, SoundSolid } from '../components/icons'
import DetailSummaryItem from "../components/DetailSummaryItem";
import LoaderText from "../components/LoaderText";
import { Audio } from 'expo-av';


function DetailView({ navigation, route, favoritesData, setFavoritesData }) {
  const keyword = route.params?.title;
  const [data, setData] = useState(null);
  const [sesKod, setSesKod] = useState("");
  const [isFav, setIsFav] = useState(false);
  const [play, setPlay] = useState(false);

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    let data = await response.json();
    setData(data[0]);
    data = await fetch(`https://sozluk.gov.tr/yazim?ara=${keyword}`)
    const sesKodData = await data.json();
    setSesKod(sesKodData[0]?.seskod);
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

  const playAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: `https://sozluk.gov.tr/ses/${sesKod}.wav` })
      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.didJustFinish === true) {
          setPlay(false)
          await sound.unloadAsync()
        }
      })
      setPlay(true)
      await sound.playAsync();
    } catch (error) {
      // An error occurred!
    }
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
            <Text style={{ color: COLORS.textLight, marginTop: 6 }}>
              {data?.telaffuz || data?.lisan}
            </Text>
          ) : (!sesKod && (
            <Text style={{ color: COLORS.textLight, marginTop: 7 }}>
              Atasözleri ve Deyimler
            </Text>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: 114 }}>
            {sesKod && (

              play ? (
                <ActionButton disabled={true}>
                  <SoundSolid width={24} height={24} color={COLORS.red} />
                </ActionButton>
              ) : (
                <ActionButton disabled={!data} onPress={() => playAudio()}>
                  <Sound width={24} height={24} color={COLORS.textDark} />
                </ActionButton>
              )
            )}
            {isFav ? (
              <ActionButton onPress={() => delFavData(keyword)}>
                <FavoriteSolid width={24} height={24} color={COLORS.red} />
              </ActionButton>
            ) : (
              <ActionButton onPress={() => addFavData(keyword)}>
                <Favorite width={24} height={24} color={COLORS.textDark} />
              </ActionButton>
            )}
          </View>
          <ActionButton onPress={() => navigation.navigate('Modal', { keyword: keyword })}>
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
