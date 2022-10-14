import { useEffect, useState } from "react";
import { View, Text, Animated, FlatList, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import { CardContainer, CardSummary, CardTitle } from "../components/Card";
import { SimpleCardContainer, SimpleCardTitle } from "../components/SimpleCard";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import SearchBox from "../components/SearchBox";
import { Logo } from "../components/icons";

import { COLORS } from "../utils/colors";
import bg from '../assets/image/bg.jpg'

function SearchView({ navigation }) {
  const [bgOpacity] = useState(new Animated.Value(1))
  const [redHeight] = useState(new Animated.Value(230))
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
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230,
        useNativeDriver: false
      }).start()

      Animated.timing(redHeight, {
        toValue: 0,
        duration: 230,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(redHeight, {
        toValue: 230,
        duration: 230,
        useNativeDriver: false
      }).start()

      Animated.timing(bgOpacity, {
        toValue: 1,
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
      <Animated.View source={bg} style={{ height: redHeight, alignItems: "center", justifyContent: "center", zIndex: 1, opacity: bgOpacity }}>
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
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, paddingHorizontal: 18 }}>
            <FlatList
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Detail', { title: item.title })}>
                    <SimpleCardContainer>
                      <SimpleCardTitle>{item.title}</SimpleCardTitle>
                    </SimpleCardContainer>
                  </TouchableOpacity>
                </View>
              )}
              ListHeaderComponent={
                <Text style={{ color: COLORS.textLight, marginBottom: 5 }}>Son Aramalar</Text>
              }
            />
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: COLORS.softGray, padding: 18, paddingTop: 56 }}>
            <View>
              <Text style={{ color: COLORS.textLight }}>Bir Deyim</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { title: "Title" })}>
                <CardContainer>
                  <CardTitle>Title</CardTitle>
                  <CardSummary>Description</CardSummary>
                </CardContainer>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={{ color: COLORS.textLight }}>Bir Deyim - Bir Atasözü</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { title: "Siyem siyem ağlamak" })}>
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
