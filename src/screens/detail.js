import SafeAreaView from "react-native-safe-area-view";
import { Text } from "react-native";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

function DetailView() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Detail!</Text>
    </SafeAreaView>
  );
}

export default DetailView;
