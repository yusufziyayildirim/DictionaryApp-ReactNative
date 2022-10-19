import * as React from 'react';
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
            <HomeStack.Screen
                name="Search"
                component={SearchView}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Detail"
                component={DetailView}
                options={({ route, navigation }) => ({
                    title: route.params?.title,
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
function FavoriteStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="FavoriteStack"
                component={FavoriteView}
                options={() => ({
                    title: "Favoriler",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.softGray
                    }
                })}
            />
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
function HistoryStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HistoryStack"
                component={HistoryView}
                options={() => ({
                    title: "Geçmiş",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.softGray
                    }
                })}
            />
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

export default function App() {
    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Home' tabBar={props => <TabBar {...props} />} >
                <Tab.Screen
                    name="History"
                    component={HistoryStack}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Home"
                    component={SearchStack}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Favorite"
                    component={FavoriteStack}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}