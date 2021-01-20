import React from 'react'
import { TextInput,StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as size from "../config/size"
import defaultStyles from "../config/styles"

export default function SearchBar({icon , placeholder, ...otherProps}) {
    
    return (
       <View style={styles.container}>
        {/* if the icon parameter has value the only icon is shown */}
       { icon && <Icon name={icon} size={15} color={defaultStyles.colors.black} style={styles.icon} />}
        <TextInput style={defaultStyles.text} placeholder={placeholder} {...otherProps}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.white,
        borderColor:defaultStyles.colors.grey,
        borderWidth:0.5,
        borderRadius:10,
        flexDirection:"row",
        width:size.width * 0.95,
        //padding:10,
        paddingVertical:6,
        paddingHorizontal:10,
        marginVertical:10,
        margin:1,
        alignSelf:"center"
    },
    icon:{
        marginRight:10,
        alignSelf:"center"
    }
})