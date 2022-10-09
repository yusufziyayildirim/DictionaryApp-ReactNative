import {View, Button} from "react-native";
import { Logo } from "../components/icons";
import { COLORS } from "../utils/colors";

function SearchView({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo color={COLORS.red} />
    </View>
  );
}

export default SearchView;
