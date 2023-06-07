import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
    <View style={styles.headingContainer}>
      <View>
        <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
        </Text>
      </View>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight: "bold",
        margin:10,
        color: '#ffffff'
    },
    card:{},
    elevatedCard:{},
    headingContainer: {},
    headerText: {},
})