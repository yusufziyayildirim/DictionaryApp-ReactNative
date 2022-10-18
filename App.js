import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchView from './src/screens/search';
import HistoryView from './src/screens/history';
import FavoriteView from './src/screens/favorite';
import DetailView from './src/screens/detail';

import TabBar from './src/components/TabBar';
import { More, Left } from './src/components/icons'

import { COLORS } from './src/utils/colors';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" options={{ headerShown: false }} component={SearchView} />
      <HomeStack.Screen
        name="Detail"
        options={({ route, navigation }) => ({
          title: route.params?.title,
          headerStyle: {
            backgroundColor: COLORS.softGray,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={
                () => navigation.navigate("Search")
              }
            >
              <Left color={COLORS.textDark} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={
                () => navigation.navigate("Search")
              }
            >
              <More color={COLORS.textDark} />
            </TouchableOpacity>
          )
        })}
        component={DetailView}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarShowLabel: false, headerShown: false }} tabBar={props => <TabBar {...props} />} >
          <Tab.Screen name="History" component={HistoryView} />
          <Tab.Screen name="Home" component={SearchStack} />
          <Tab.Screen name="Favorite" component={FavoriteView} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}