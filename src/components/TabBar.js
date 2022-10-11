import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Favorite, Search, History } from './icons'
import { COLORS } from '../utils/colors';

function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.tabBarWrap}>
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
                    <View key={label} style={styles.searchButtonWrap}>
                        <TouchableOpacity onPress={onPress} style={[styles.tabBarButton, styles.searchButton]}>
                            <Search stroke="white" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity key={label} onPress={onPress} style={styles.tabBarButton}>
                        {label === "History" && <History stroke={isFocused ? COLORS.red : COLORS.textLight} />}
                        {label === "Favorite" && <Favorite stroke={isFocused ? COLORS.red : COLORS.textLight} />}
                        {isFocused && <View style={styles.indicator} />}
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default TabBar;

const styles = StyleSheet.create({
    tabBarWrap: {
        flexDirection: 'row',
        shadowColor: "#000",
        backgroundColor: "white",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        paddingBottom: 30
    },
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
    },
    indicator: {
        height: 4,
        width: 4,
        borderRadius: 100,
        backgroundColor: COLORS.red,
        marginTop: 5
    }
})