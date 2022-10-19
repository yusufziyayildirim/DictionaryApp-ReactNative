import React from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { COLORS } from '../utils/colors'
import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard'

const TitleCardList = ({ data, navigation, title, icon }) => {

    const handlerLongClick = () => {
        //handler for Long Click
        console.log(data);
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { title: item.madde })} >
                        <SimpleCardContainer>
                            <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                                <SimpleCardTitle>{item.madde}</SimpleCardTitle>
                                {icon}
                            </View>
                        </SimpleCardContainer>
                    </TouchableOpacity>
                </View>
            )}
            ListHeaderComponent={title && (
                <Text style={{ color: COLORS.textLight, marginBottom: 5 }}>{title}</Text>
            )}
        />
    )
}

export default TitleCardList