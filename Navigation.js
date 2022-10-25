import { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchView from './src/screens/search';
import HistoryView from './src/screens/history';
import FavoriteView from './src/screens/favorite';
import DetailView from './src/screens/detail';
import SignLangView from './src/screens/signLang';

import TabBar from './src/components/TabBar';
import { Left } from './src/components/icons'

import { COLORS } from './src/utils/colors';

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
                    contentStyle: { backgroundColor: "none", justifyContent: "flex-end" },
                }}

                component={SignLangView}
            />
        </HomeStack.Navigator>
    );
}

export default function Navigation() {
    const [historyData, setHistoryData] = useState([]);
    const [favoritesData, setFavoritesData] = useState([]);

    useEffect(() => {
        getFavoriteData()
        getHistoryData()
    }, [])

    useEffect(() => {
        storeHistoryData(historyData)
    }, [historyData])

    useEffect(() => {
        storeFavoriteData(favoritesData)
    }, [favoritesData])

    const storeHistoryData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@userData:history', jsonValue)
        } catch (error) {
            console.log("error", error)
        }
    }

    const storeFavoriteData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@userData:favorite', jsonValue)
        } catch (error) {
            console.log("error", error)
        }
    }

    const getFavoriteData = async () => {
        try {
            const getFavorite = await AsyncStorage.getItem('@userData:favorite');
            if (getFavorite !== null) {
                setFavoritesData(JSON.parse(getFavorite))
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const getHistoryData = async () => {
        try {
            const getHistory = await AsyncStorage.getItem('@userData:history')
            if (getHistory !== null) {
                setHistoryData(JSON.parse(getHistory))
            }
        } catch (error) {
            console.log("error", error)

        }
    }

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