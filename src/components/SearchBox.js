import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { COLORS } from "../utils/colors";
import { Search, Close } from "./icons";

function SearchBox() {

    const [value, setValue] = useState(false);
    const [isFocus, setFocus] = useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }
    const onClear = () => {
        setValue("")
    }

    return (
        <View style={styles.ContentWrap}>
            <View style={styles.SearchBoxWrap}>
                <View style={styles.SearchIcon}>
                    <Search color={COLORS.textMedium} />
                </View>
                {value.length > 0 && (
                    <TouchableOpacity onPress={onClear}  style={styles.CloseIcon}>
                        <Close color={COLORS.textMedium} />
                    </TouchableOpacity>
                )}
                <TextInput
                    placeholder="Türkçe Sözlük'te Ara"
                    placeholderTextColor={COLORS.textMedium}
                    style={[styles.SearchInput, isFocus ? styles.BlueInputBorder : ""]}
                    onFocus={() => setFocus(true)}
                    value={value}
                    onChangeText={text => setValue(text)}
                />
            </View>
            {isFocus && (
                <TouchableOpacity onPress={onCancel} style={{ paddingLeft: 15, height: 52, justifyContent: "center" }}>
                    <Text>Vazgeç</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    ContentWrap: {
        flexDirection: "row",
        alignItems: "center"
    },
    SearchBoxWrap: {
        flex: 1,
        position: "relative",
    },
    SearchInput: {
        height: 52,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        color: COLORS.textDark,
        paddingLeft: 52,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 24,
    },
    BlueInputBorder: {
        borderColor: "#D1D1D1",
    },
    SearchIcon: {
        position: "absolute",
        zIndex: 1,
        left: 16,
        top: 14
    },
    CloseIcon: {
        position: "absolute",
        zIndex: 1,
        right: 16,
        top: 14
    }
});

export default SearchBox