import { useEffect, useState } from "react";
import { View} from "react-native";
import SafeAreaView from "react-native-safe-area-view";


import { COLORS } from "../utils/colors";
import SuggestionCard from "../components/SuggestionCard";
import SearchHistoryList from "../components/SearchHistoryList";
import HomeSearch from "../components/HomeSearch";

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik")
    const data = await response.json();
    setHomeData(data);
  }

  useEffect(() => {
    getHomeData()
  }, [])

  const HistoryDATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
      summary: 'acaklana 1'
    },
    {

      id: '3ac68afc-c685-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
      summary: 'acaklang 2'
    },
    {
      id: "2",
      title: 'Third Item 3',
      summary: 'acaklang 3'
    }
  ]
  
  return (
    <SafeAreaView style={{ backgroundColor: isSearchFocus ? COLORS.softGray : COLORS.red, flex: 1 }}>
      <HomeSearch 
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        {isSearchFocus ? (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
            <SearchHistoryList data={HistoryDATA} navigation={navigation} />
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, padding: 18, paddingTop: 56 }}>
            <SuggestionCard 
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() => navigation.navigate('Detail', { title: homeData?.kelime[0].madde })}
              marginTop = {false}
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
