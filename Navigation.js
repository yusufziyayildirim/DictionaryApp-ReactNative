import * as React from 'react';
import { useState } from "react";
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
import SignLangView from './src/screens/signLang';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack({ historyData, setHistoryData, favoritesData, setFavoritesData }) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Search"
                options={{ headerShown: false }}
            >
                {(props) => <SearchView historyData={historyData} setHistoryData={setHistoryData} {...props} />}
            </HomeStack.Screen>
            <HomeStack.Screen
                name="Detail"
                options={({ navigation }) => ({
                    title: "Türkçe Sözlük",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.softGray
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ padding: 5 }}
                            onPress={
                                () => navigation.goBack()
                            }
                        >
                            <Left color={COLORS.textDark} />
                        </TouchableOpacity>
                    )
                })}
            >
                {(props) => <DetailView favoritesData={favoritesData} setFavoritesData={setFavoritesData} {...props} />}
            </HomeStack.Screen>
            <HomeStack.Screen
                name="Modal"
                options={{
                    headerShown: false,
                    presentation: 'modal',
                }}

                component={SignLangView}
            />
        </HomeStack.Navigator>
    );
}

export default function Navigation() {
    const [historyData, setHistoryData] = useState([]);
    const [favoritesData, setFavoritesData] = useState([]);

    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Home' tabBar={props => <TabBar {...props} />} >
                <Tab.Screen
                    name="History"
                    options={() => ({
                        headerTitle: "Geçmiş",
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: COLORS.softGray
                        }
                    })}
                >
                    {(props) => <HistoryView historyData={historyData} setHistoryData={setHistoryData} favoritesData={favoritesData} setFavoritesData={setFavoritesData} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Home"
                    options={{ headerShown: false }}
                >
                    {(props) => <SearchStack historyData={historyData} setHistoryData={setHistoryData} favoritesData={favoritesData} setFavoritesData={setFavoritesData} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Favorite"
                    options={() => ({
                        headerTitle: "Favoriler",
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: COLORS.softGray
                        }
                    })}
                >
                    {(props) => <FavoriteView favoritesData={favoritesData} setFavoritesData={setFavoritesData} {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}