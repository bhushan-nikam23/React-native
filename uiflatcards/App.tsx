import { ScrollView, SafeAreaView, StyleSheet,  ViewStyle,
  TextStyle, useColorScheme } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

export default function App() {
  const colorScheme = useColorScheme() ==='dark';

  const viewStyles: ViewStyle[] = [
    styles.container, { backgroundColor: colorScheme ? "#ffffff" : "#000000" },
  ]
  
  return (
    <SafeAreaView style={viewStyles}>
      <ScrollView>
         <Flatcards />
         <ElevatedCards />
         <FancyCard />
         <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
