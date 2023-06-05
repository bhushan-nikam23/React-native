import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.heading}>Flatcards</Text>
      <View style={styles.container1}>
       <View style={[styles.card, styles.cardone]} />
       <View style={[styles.card, styles.cardtwo]} />
       <View style={[styles.card, styles.cardthree]} />
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

    container1:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card : {
        flex:1,
        width:100,
        height:100,
        borderWidth:4,
        margin:8,
        justifyContent:'center'
    },
    cardone:{
        backgroundColor:'#EF5354'
    },

    cardtwo:{
        backgroundColor:'#50DBB4'
    },
    cardthree:{
        backgroundColor:'#5DA3FA'
    },

})