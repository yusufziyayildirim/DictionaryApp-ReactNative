import React from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'
import { COLORS } from '../utils/colors'
import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard'

const TitleCardList = ({ data, navigation, title, icon, oldData, setOldData }) => {

    const handleClick = (item) => {
        navigation.navigate('Detail', { title: item.madde })
        if(oldData){
            oldData = oldData.filter(data => data.madde.toLowerCase() != item.madde.toLowerCase())
            setOldData([
                { madde: item.madde },
                ...oldData
            ]);
        }
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => handleClick(item)} >
                        <SimpleCardContainer>
                            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                <SimpleCardTitle>{item.madde}</SimpleCardTitle>
                                {icon && (icon)}
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