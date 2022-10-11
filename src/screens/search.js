import { useEffect, useState } from "react";
import { View, ImageBackground, Text, Animated } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { Logo } from "../components/icons";
import SearchBox from "../components/SearchBox";
import bg from '../assets/image/bg.jpg'
import { COLORS } from "../utils/colors";

function SearchView() {
  const [redHeight] = useState(new Animated.Value(285))
  const [logoScale] = useState(new Animated.Value(1))
  const [isSearchFocus, setSearchFocus] = useState(false);

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
    <SafeAreaView style={{ backgroundColor: isSearchFocus ? COLORS.softRed : COLORS.red, flex: 1 }}>
      {!isSearchFocus ? (
        <FocusAwareStatusBar barStyle="light-content" />
      ) : (
        <FocusAwareStatusBar barStyle="dark-content" />
      )}

      {/* Header */}
      <Animated.View source={bg} style={{ height: redHeight, alignItems: "center", justifyContent: "center", zIndex: 1 }}>
        {/* Logo */}
        {!isSearchFocus && (
        <View style={{paddingVertical: 20, flex: 1, alignItems: "center", justifyContent: "center" }}>
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
        {!isSearchFocus ? (
          <View style={{ flex: 1, backgroundColor: "white", padding: 30, paddingTop: isSearchFocus ? 26 : 56 }}>
            <Text>Content</Text>
          </View>
        ) : (
          <View style={{ flex: 1, backgroundColor: "white", padding: 30, paddingTop: isSearchFocus ? 26 : 56 }}>
            <Text>Search Focused</Text>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
}

export default SearchView;
