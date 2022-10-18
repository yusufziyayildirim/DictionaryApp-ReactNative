// import React from 'react'
import { useEffect, useState } from "react";
import { View, Animated } from "react-native";
import SearchBox from "../components/SearchBox";

import { Logo } from "./icons";
import FocusAwareStatusBar from './FocusAwareStatusBar'

import bg from '../assets/image/bg.jpg'

const HomeSearch = ({isSearchFocus, onSearchFocus}) => {
    const [bgOpacity] = useState(new Animated.Value(1))
    const [redHeight] = useState(new Animated.Value(230))

    useEffect(() => {
        if (isSearchFocus) {
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: 230,
                useNativeDriver: false
            }).start()

            Animated.timing(redHeight, {
                toValue: 0,
                duration: 230,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(redHeight, {
                toValue: 230,
                duration: 230,
                useNativeDriver: false
            }).start()

            Animated.timing(bgOpacity, {
                toValue: 1,
                duration: 230,
                useNativeDriver: false
            }).start()
        }
    }, [isSearchFocus])

    return (
        <>
            {/* StatusBar */}
            {!isSearchFocus ? (
                <FocusAwareStatusBar barStyle="light-content" />
            ) : (
                <FocusAwareStatusBar barStyle="dark-content" />
            )}
            {/* Header */}
            <Animated.View source={bg} style={{ height: redHeight, alignItems: "center", justifyContent: "center", zIndex: 1, opacity: bgOpacity }}>
                {/* Logo */}
                {!isSearchFocus && (
                    <View style={{ paddingVertical: 20, flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Logo color="white" />
                    </View>
                )}
            </Animated.View>
            {/* Search */}
            <View style={{ width: "100%", padding: 16, marginBottom: isSearchFocus ? 0 : -42, zIndex: 2 }}>
                <SearchBox onChangeFocus={status => onSearchFocus(status)} />
            </View>
        </>
    )
}

export default HomeSearch