import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
export default function HeaderComponent() {
    return (
        <View style={styles.headerComponent} >
            <Text style={styles.headerTextStyle}>
                ToDo App
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerComponent: {

        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        color: "#f2f2f2",
        fontFamily: 'Arial',
        backgroundColor: '#9E4784',
        height: 60
    },
    headerTextStyle: {
        fontSize: 30,
        fontFamily: 'Arial'
    }
})