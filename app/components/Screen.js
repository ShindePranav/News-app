import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

export default function Screen({children}) {
    return (
        <View style={styles.screen}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight
    }
})

