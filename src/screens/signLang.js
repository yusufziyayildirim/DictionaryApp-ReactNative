import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { COLORS } from '../utils/colors'
import bg from '../assets/image/bg.jpg'
import { Logo } from '../components/icons'


const SignLangView = ({ route }) => {
    const keyword = route.params?.keyword;

    return (
        <View style={{ position: "relative", backgroundColor: "white", flex: 1 }}>
            <View style={{ position: "absolute", zIndex: 99, borderTopWidth: 4, width: 58, borderTopColor: COLORS.light, top: 16, borderRadius: 14, marginLeft: "50%", transform: [{ translateX: -75 }] }} />
            <Image source={bg} style={{ position: "absolute", top: 0, height: 250 }} />
            <View source={bg} style={{ height: 250, alignItems: "center", justifyContent: "center" }}>
                <Logo color="white" />
                <Text style={{ paddingTop: 20, fontWeight:"700", color:"white" }}>Türk İşaret Dili</Text>
            </View>

            <View style={{ paddingVertical: 50, paddingLeft: 25, flex:1 }}>
                <Text style={{ fontWeight: "700", fontSize: 18, color: COLORS.textDark }}>
                    Türk İşaret Dili
                </Text>
                <Text style={{ fontWeight: "500", fontSize: 14, color: COLORS.textLight, marginTop: 8 }}>
                    Parmak Alfabesiyle Gösterilişi
                </Text>
                <ScrollView
                    horizontal={true}
                    style={{ marginTop: 32 }}
                >
                    {
                        keyword.split("").map((char, index) => (
                            <View key={index}>
                                {char != " " ? (
                                    <>
                                        <View style={{ width: 102, height: 64, padding: 3, borderWidth: 1, borderColor: COLORS.light, borderRadius: 6, marginRight: 10, marginBottom: 8 }}>
                                            <Image
                                                style={{ width: 94, height: 58 }}
                                                source={{ uri: `https://sozluk.gov.tr/assets/img/isaret/${char}.gif` }}
                                            />
                                        </View>
                                        <View style={{ width: 102, height: 24, backgroundColor: COLORS.light, borderRadius: 6, marginRight: 10, justifyContent: "center" }}>
                                            <Text style={{ fontWeight: "700", fontSize: 14, color: COLORS.textDark, textAlign: "center" }}>
                                                {char}
                                            </Text>
                                        </View>
                                    </>
                                ) : (
                                    <View style={{ width: 20 }} />
                                )}

                            </View>
                        ))
                    }
                </ScrollView>
            </View>

        </View>
    )
}

export default SignLangView