import { View, Button } from "react-native";
import { Logo } from "../components/icons";
import { COLORS } from "../utils/colors";
import SearchBox from "../components/SearchBox";

function SearchView({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <View style={{ paddingVertical: 20 }}>
        <Logo color={COLORS.red} />
      </View>
      <View style={{padding: 10}}>
        <SearchBox />
      </View>
    </View>
  );
}

export default SearchView;
