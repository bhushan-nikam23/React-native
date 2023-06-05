import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style= {styles.container}>
      <View style={[styles.card, styles.cardElaveted]}> 
      <Text>Hellow</Text>
      </View>
      <View style={[styles.card, styles.cardElaveted]}>
      <Text>How</Text>
      </View>
      <View style={[styles.card, styles.cardElaveted]}>
      <Text>Are</Text>
      </View>
      <View style={[styles.card, styles.cardElaveted]}>
      <Text>You</Text>
      </View>
      <View style={[styles.card, styles.cardElaveted]}>
      <Text>😊</Text>
      </View>
      <View style={[styles.card, styles.cardElaveted]}>
      <Text>?</Text>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight: "bold",
        margin:10,
        color:'#ffffff',
        paddingHorizontal:8
    },

    container: {
      padding:8
    },

    card:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    height:100,
    borderRadius:4,
    margin:8
    },

    cardElaveted:{
    backgroundColor: '#CAD5E2',
    shadowOffset:{
      width:3,
      height:3
    },
    shadowColor: '#fff000',
    shadowOpacity:0.9,
    textShadowRadius:8
    }, 
})