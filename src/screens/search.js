import { useEffect, useState } from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";


import { COLORS } from "../utils/colors";
import SuggestionCard from "../components/SuggestionCard";
import TitleCardList from "../components/TitleCardList";
import HomeSearch from "../components/HomeSearch";

function SearchView({ navigation, historyData, setHistoryData }) {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState(null);
  const [completeData, setCompleteData] = useState();
  const [searchRes, setSearchRes] = useState();

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik")
    const data = await response.json();
    setHomeData(data);
  }

  const getCompleteData = async () => {
    const response = await fetch("https://sozluk.gov.tr/autocomplete.json")
    const data = await response.json();
    setCompleteData(data)
  }

  useEffect(() => {
    getHomeData()
    getCompleteData()
  }, [])

  const searchKeywords = (text) => {
    setSearchRes(
      completeData.filter(keyword =>
        keyword.madde.toLowerCase().startsWith(text.toLowerCase())
      )
    )
  }

  const clearRes = () => {
    setSearchRes("")
  }


  return (
    <SafeAreaView style={{ backgroundColor: isSearchFocus ? COLORS.softGray : COLORS.red, flex: 1 }}>
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
        searchKeywords={searchKeywords}
        clearRes={clearRes}
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        {isSearchFocus ? (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
            <TitleCardList oldData={historyData} setOldData={setHistoryData} data={searchRes ? searchRes : historyData} navigation={navigation} title={searchRes ? null : "Son aramalar"} />
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, padding: 18, paddingTop: 56 }}>
            <SuggestionCard
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() => navigation.navigate('Detail', { title: homeData?.kelime[0].madde })}
              marginTop={false}
            />
            <SuggestionCard
              title="Bir Kelime"
              data={homeData?.atasoz[0]}
              onPress={() => navigation.navigate('Detail', { title: homeData?.atasoz[0].madde })}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default SearchView;
