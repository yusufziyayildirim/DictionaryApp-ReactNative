import {View, Button} from "react-native";
import { Logo } from "../components/icons";

function SearchView({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo color="#E11E3C" />
    </View>
  );
}

export default SearchView;
