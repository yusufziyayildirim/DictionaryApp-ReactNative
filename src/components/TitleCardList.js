import React from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { COLORS } from '../utils/colors'
import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard'

const TitleCardList = ({ data, navigation, title, icon }) => {


    const handlerLongClick = () => {
        //handler for Long Click
        alert('Button Long Pressed');
      };

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { title: item.title })} >
                        <SimpleCardContainer>
                            <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                                <SimpleCardTitle>{item.title}</SimpleCardTitle>
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