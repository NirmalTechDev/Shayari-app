import React from "react";
import {StyleSheet, View, Pressable, Image, Text, Alert} from 'react-native';

export const Prime = () => {

function press()
{
    Alert.alert("sorry","You Don't Have Enough Balance.")
}

    return(
        <>
            <View style={style.main}>
                <View style={style.peta}>
                    <Pressable style={style.button} onPress={press}>
                        <View style={style.first}>
                            <Image source={require('./img/ad.png')} resizemode="contain" style={style.img}></Image>
                        </View>
                        <View style={style.second}>
                            <Text style={style.txt}>REMOVE ADS</Text>
                        </View>
                    </Pressable>
                    <Pressable style={style.button} onPress={press}>
                        <View style={style.first}>
                            <Image source={require('./img/eraser.png')} resizemode="contain" style={style.img}></Image>
                        </View>
                        <View style={style.second}>
                            <Text style={style.txt}>REMOVE WATERMARK</Text>
                        </View>
                    </Pressable>
                    <Pressable style={style.button} onPress={press}>
                        <View style={style.first}>
                            <Image source={require('./img/money.png')} resizemode="contain" style={style.img}></Image>
                        </View>
                        <View style={style.second}>
                            <Text style={style.txt}>COMBO (SAVE 25%)</Text>
                        </View>
                    </Pressable>
                    <Pressable style={style.button_} onPress={press}>
                            <Text style={style.txt}>RESTORE PURCHASE</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    main:{
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.1)",
    },
    peta:{
        height:"60%",
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-around",
    },
    button:{
        height:"22%",
        width:"80%",
        backgroundColor:"orange",
        borderRadius:10,
        alignSelf:"center",
        shadowColor:"black",
        elevation:10,
    },
    first:{
        height:"50%",
        justifyContent:"flex-end"
    },
    img:{
        height:"75%",
        width:"13.5%",
        alignSelf:"center",
    },
    second:{
        height:"50%",
    },
    txt:{
        height:"100%",
        fontSize:23,
        color:"black",
        fontWeight:"900",
        textAlign:"center",
        textAlignVertical:"center",
    },
    button_:{
        height:"10%",
        width:"90%",
        alignSelf:"center",
        backgroundColor:"skyblue",
        borderRadius:8,
        shadowColor:"black",
        elevation:10
    }
})