import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function FavoriteView() {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Favorite!</Text>
    </SafeAreaView>
  );
}

export default FavoriteView;
