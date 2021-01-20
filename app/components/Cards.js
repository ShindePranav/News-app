import React from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native'
import * as size from "../config/size"
import defaultStyles from "../config/styles"

export default function Cards({title,shortDescription,date,readMins=0,img,liked, onPress,onLike}) {
    
    return (
        <>
        <View style={[styles.mainCointaner]}>
            <TouchableOpacity style={styles.leftColumn} onPress={onPress}>
            <Text style={styles.baseText} numberOfLines={2} ellipsizeMode={"tail"}>{shortDescription}</Text>
            <Text style={styles.titleText} accessibilityRole={"search"}>{title}</Text>
            <Text style={styles.detailsText}>{date} - {readMins} mins read</Text>
            </TouchableOpacity>
            <View style={styles.rightColumn}>
                <Image style={styles.tinyLogo} 
                resizeMode={"contain"}
                source={{uri:img}}
                />
            </View>
            <View style={styles.sideColumn}>
              <TouchableOpacity onPress={onLike}>
                <Image style={styles.tinyLike} 
                resizeMode={"contain"}
                source={{uri:'https://cdn2.iconfinder.com/data/icons/facebook-ui-colored/48/JD-22-512.png'}}
                />
                <View style={{alignContent:"center", bottom:50,paddingLeft:10}}>
                <Text style={{fontWeight:'bold',alignSelf:"flex-start"}}>{liked}</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        <View
          style={{
          borderBottomColor: defaultStyles.colors.grey,
          borderBottomWidth: 0.5,
          }}
        /></>
        
    )
}
const styles = StyleSheet.create({
mainCointaner:{
    width:size.width,
    height:size.height * 0.18,
    //backgroundColor:"red",
    padding:10,
    //paddingHorizontal:20,
    paddingLeft:20,
    //marginTop:-24,
    flexDirection:"row",
    alignSelf:"center"
},
tinyLogo: {
    alignSelf: 'center',
    height:'80%', 
    width:'90%',
    padding:40
  },
tinyLike: {
    alignSelf: 'center',
    bottom:15,
    height:'100%', 
    width:'100%'
  },
rightColumn:{
    flex:4,
    flexDirection:"row-reverse",
    //backgroundColor:"blue"
  },
  sideColumn:{
    //backgroundColor:'red',
    flex:1,
  },
  leftColumn:{
    flex:6,
    //backgroundColor:"red"
  },
  baseText: {
    flex:5,
    paddingTop:0,
    fontWeight:"bold",
    fontSize:18
  
  },
  titleText: {
    flex:2,
    fontSize: 12,
    fontWeight:'normal'
  },
  detailsText:{
    flex:1,
    fontSize:10,
    fontStyle: 'italic',
    color:defaultStyles.colors.grey,
    paddingLeft:0,
    padding:0,
    margin:2
  }

})
