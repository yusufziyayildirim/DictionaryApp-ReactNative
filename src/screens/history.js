import SafeAreaView from "react-native-safe-area-view";
import { Text, View } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

function HistoryView({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>History!</Text>
    </SafeAreaView>
  );
}

export default HistoryView;
