import React from "react"
import { View, StyleSheet, Text } from "react-native"


export default function MainComponent() {
    return (
        <View style={styles.mainComponent}>
            <Text>
                Funciona caralho

            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainComponent: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue'
    }
})