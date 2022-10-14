import SafeAreaView from "react-native-safe-area-view";
import { Text } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { COLORS } from "../utils/colors";

function DetailView() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.softGray, flex: 1, padding:16 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Detail!</Text>
    </SafeAreaView>
  );
}

export default DetailView;
