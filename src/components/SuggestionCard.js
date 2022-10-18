import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { CardContainer, CardSummary, CardTitle } from "./Card";

import { COLORS } from '../utils/colors';
import LoaderText from './LoaderText';


const SuggestionCard = ({ title, onPress, data, marginTop = true }) => {
    return (
        <View style={{ marginTop: marginTop ? 40 : 0 }}>
            <Text style={{ color: COLORS.textLight }}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <CardContainer>
                    {
                        data ? (
                            <>
                                <CardTitle>{data.madde}</CardTitle>
                                <CardSummary>{data.anlam}</CardSummary>
                            </>
                        ) : (
                            <View>
                                <LoaderText width={160} />
                                <LoaderText width={240} mt={10} />
                            </View>
                        )
                    }
                </CardContainer>
            </TouchableOpacity>
        </View>
    )
}

export default SuggestionCard