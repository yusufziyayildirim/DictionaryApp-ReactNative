import { useEffect, useState } from "react";
import { View, Text, Animated, FlatList, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import { CardContainer, CardSummary, CardTitle } from "../components/Card";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import SearchBox from "../components/SearchBox";
import { Logo } from "../components/icons";

import { COLORS } from "../utils/colors";
import bg from '../assets/image/bg.jpg'

function SearchView({ navigation }) {
  const [redHeight] = useState(new Animated.Value(285))
  const [isSearchFocus, setSearchFocus] = useState(false);

  const DATA = [
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

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(redHeight, {
        toValue: 0,
        duration: 230,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(redHeight, {
        toValue: 285,
        duration: 230,
        useNativeDriver: false
      }).start()
    }
  }, [isSearchFocus])

  return (
    <SafeAreaView style={{ backgroundColor: isSearchFocus ? COLORS.softGray : COLORS.red, flex: 1 }}>
      {!isSearchFocus ? (
        <FocusAwareStatusBar barStyle="light-content" />
      ) : (
        <FocusAwareStatusBar barStyle="dark-content" />
      )}

      {/* Header */}
      <Animated.View source={bg} style={{ height: redHeight, alignItems: "center", justifyContent: "center", zIndex: 1 }}>
        {/* Logo */}
        {!isSearchFocus && (
          <View style={{ paddingVertical: 20, flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Logo color="white" />
          </View>
        )}
      </Animated.View>

      {/* Search */}
      <View style={{ width: "100%", padding: 16, marginBottom: isSearchFocus ? 0 : -42, zIndex: 2 }}>
        <SearchBox onChangeFocus={status => setSearchFocus(status)} />
      </View>

      {/* Content */}
      <View style={{ flex: 1 }}>
        {isSearchFocus ? (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, padding: 30, paddingTop: isSearchFocus ? 26 : 56 }}>
            <Text>History</Text>
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, padding: 18, paddingTop: isSearchFocus ? 26 : 56 }}>
            {/* <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <View style={{marginBottom: 12}}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardContainer>
                </View>
              )}
              keyExtractor={item => item.id}
            /> */}
            <View>
              <Text style={{ color: COLORS.textLight }}>Bir Deyim</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <CardContainer>
                  <CardTitle>Title</CardTitle>
                  <CardSummary>Description</CardSummary>
                </CardContainer>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={{ color: COLORS.textLight }}>Bir Deyim - Bir Atasözü</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <CardContainer>
                  <CardTitle>Siyem siyem ağlamak</CardTitle>
                  <CardSummary>Hafif hafif, durmadan gözyaşı dökmek</CardSummary>
                </CardContainer>
              </TouchableOpacity>
            </View>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
}

export default SearchView;
