import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.heading}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
      <Image source={{uri: 'https://shahikapathshala.com/wp-content/uploads/2022/07/IMG_20220613_083050373_HDR-01-01-scaled.jpeg' }} 
            style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style= {styles.cardTitle}>Hawa Mahal</Text>
        <Text style= {styles.cardLabel}>Pink City, Jaipur</Text>
        <Text style= {styles.cardDescription}>Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.
          The structure was built in 1799 by the Maharaja Sawai Pratap Singh</Text>
        <Text style= {styles.cardFooter}>12 mins away</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:24,
    fontWeight: "bold",
    paddingHorizontal:8,
    margin:10,
    color: '#ffffff'
},

card:{
  width:350,
  height:360,
  borderRadius: 6,
  marginVertical: 12,
  marginHorizontal:16,
},
cardElevated:{
  backgroundColor: '#ffffff',
  elevation: 3,
  shadowOffset: {
    width:1,
    height:1
  }
},
cardImage:{
  height:180,
  marginBottom:8,
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
},
cardBody: {
  flex:1,
  flexGrow:1,
  paddingHorizontal: 12,
},

cardTitle:{
  color: '#000000',
 fontSize:22,
 fontWeight:'bold',
 marginBottom:6
},

cardLabel:{
  color: '#000000',
  fontSize:16,
  marginBottom:4
},


cardDescription:{
  color:'#758283',
  fontSize:14,
  marginBottom:4,
},
  cardBody: {
    flex:1,
    flexGrow:1,
    marginBottom:4,
    marginHorizontal:12,
  },

cardFooter:{
  
}
})