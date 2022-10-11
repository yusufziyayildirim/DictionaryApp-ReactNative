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

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
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