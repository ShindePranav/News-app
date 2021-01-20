import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as size from "../config/size"

export default function DetailsScreen({route,navigation}) {

    //Here we take all the params passed while navigation from one screen to other.
    const { img ,shortDescription,reporterName,date,readMins,story,liked} = route.params;
    
    return (
        <ScrollView style={styles.mainContainer}>
            <View>
            <Text style={styles.headingText}>{shortDescription}</Text>
            </View>
            <View>
                <View style={styles.meta}>
                <Text style={styles.metaText}>{reporterName}</Text>
                <Text style={styles.metaText}>{date} - {readMins} mins read</Text>
                </View>
                <Image style={styles.img} 
                resizeMode={"stretch"}
                source={{uri:img}}
                />
                <Text style={{alignSelf:"center", fontSize:15,fontWeight:"700"}}> Likes: {liked}</Text>
                <Text style={styles.storyText}>{story}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column',
        padding:20
    },
    meta:{
        flexDirection:'row',
        alignContent:"space-between",
        justifyContent:"space-between",
        margin:10,
        paddingHorizontal:10
    },
    img:{
        width:size.width,
        height:size.height * 0.25,
        margin:5
          },
    headingText:{
        fontWeight:"bold",
        fontSize:23,

    },
    storyText:{
        marginTop:20,
        textAlign:"justify"
    },
    metaText:{
        fontSize:12,
        fontWeight:"600"
    }
})
