import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import RandomNumber from './RandomNumber';

export default function Game(props) {

const propTypes ={
    randomNumberCount: PropTypes.number.isRequired,
};


const [selctedNumbers, selectedNumber] = useState([]);

randomNumbers = Array.from({length: props.randomNumberCount}).map(()=> 1 + Math.floor(10 * Math.random()));

target1 = randomNumbers.slice(0, props.randomNumberCount - 2).reduce((acc, curr) => acc + curr, 0);

//TODO: shuffle the random numbers

function isNumberSelected(numberIndex){
  return selctedNumbers.indexOf(numberIndex) >= 0;
}

function addselectedNumber(numberIndex){
  selectedNumber(prevNums => [...prevNums, numberIndex ]);
}

  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target1}</Text>
      <View style={styles.randomContainer}>
      {randomNumbers.map((randomNumber, index) =>
        <RandomNumber 
          key ={index} 
          id = {index}
          number={randomNumber} 
          isDisabled = {isNumberSelected(index)}
          onPress = { addselectedNumber }
        />
      )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    backgroundColor: '#ddd',
    flex:1,
   },

   target : {
    fontSize:50,
    color:'rgba(0, 0, 0, 0.99)',
    backgroundColor: '#bbb',
    margin:50,
    textAlign:'center',
   },

   randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
   },

})