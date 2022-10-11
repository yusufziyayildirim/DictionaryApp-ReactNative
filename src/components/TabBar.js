import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Favorite, Search, History } from './icons'
import { COLORS } from '../utils/colors';

function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return label === 'Home' ? (
                    <View key={label} style={style.searchButtonWrap}>
                        <TouchableOpacity onPress={onPress} style={[style.tabBarButton, style.searchButton]}>
                            <Search stroke="white" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity key={label} onPress={onPress} style={style.tabBarButton}>
                        {label === "History" && <History stroke={COLORS.textLight} />}
                        {label === "Favorite" && <Favorite stroke={COLORS.textLight} />}
                        {isFocused && <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: COLORS.red, marginTop: 5 }} />}
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default TabBar;

const style = StyleSheet.create({
    tabBarButton: {
        flex: 1,
        // justifyContent: "start",
        flexDirection: "col",
        alignItems: "center",
        paddingTop: 20,
        height: 56
    },
    searchButtonWrap: {
        paddingTop: 12,
        marginTop: -15,
        backgroundColor: "white",
        borderRadius: 9999,
        width: 84,
        alignItems: "center",
    },
    searchButton: {
        backgroundColor: COLORS.red,
        flex: 1,
        borderRadius: 100,
        width: 60,
        height: 60

    }
})