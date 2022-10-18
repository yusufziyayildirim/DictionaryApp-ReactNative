import React from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { COLORS } from '../utils/colors'
import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard'

const SearchHistoryList = ({data, navigation}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { title: item.title })}>
                        <SimpleCardContainer>
                            <SimpleCardTitle>{item.title}</SimpleCardTitle>
                        </SimpleCardContainer>
                    </TouchableOpacity>
                </View>
            )}
            ListHeaderComponent={
                <Text style={{ color: COLORS.textLight, marginBottom: 5 }}>Son Aramalar</Text>
            }
        />
    )
}

export default SearchHistoryList