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

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack({ historyData, setHistoryData }) {
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
                component={DetailView}
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
            />
        </HomeStack.Navigator>
    );
}
function FavoriteStack({ favoritesData, setFavoritesData }) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="FavoriteStack"
                options={() => ({
                    title: "Favoriler",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.softGray
                    }
                })}
            >
                {(props) => <FavoriteView favoritesData={favoritesData} setFavoritesData={setFavoritesData} {...props}/>}
            </HomeStack.Screen>
            <HomeStack.Screen
                name="Detail"
                component={DetailView}
                options={({ navigation }) => ({
                    title: "Favoriler",
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
            />
        </HomeStack.Navigator>
    );
}
function HistoryStack({ historyData, setHistoryData }) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HistoryStack"
                options={() => ({
                    title: "Geçmiş",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.softGray
                    }
                })}
            >
                {(props) => <HistoryView historyData={historyData} setHistoryData={setHistoryData} {...props} />}
            </HomeStack.Screen>

            <HomeStack.Screen
                name="Detail"
                component={DetailView}
                options={({ navigation }) => ({
                    title: "Geçmiş",
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
                    options={{ headerShown: false }}
                >
                    {(props) => <HistoryStack historyData={historyData} setHistoryData={setHistoryData} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Home"
                    options={{ headerShown: false }}
                >
                    {(props) => <SearchStack historyData={historyData} setHistoryData={setHistoryData} {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Favorite"
                    options={{ headerShown: false }}
                >
                    {(props) => <FavoriteStack favoritesData={favoritesData} setFavoritesData={setFavoritesData} {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}