import { TouchableOpacity, View, Text, FlatList } from 'react-native'

import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard'

import { COLORS } from '../utils/colors'

const TitleCardList = ({ data, navigation, title, icon, oldData, setOldData }) => {

    const handleClick = (item) => {
        navigation.navigate('Detail', { title: item.madde })
        if (oldData) {
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
            ListHeaderComponent={title && oldData.length > 0 &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: COLORS.textLight, marginBottom: 5 }}>{title}</Text>
                    <TouchableOpacity onPress={() => setOldData([])}>
                        <Text style={{ color: COLORS.textLight, marginBottom: 5 }}>Geçmişi Temizle</Text>
                    </TouchableOpacity>
                </View>
            }
        />
    )
}

export default TitleCardList