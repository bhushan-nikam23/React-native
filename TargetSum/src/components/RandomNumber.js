import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import PropTypes from 'prop-types';



export default function RandomNumber(props) {

    const propTypes ={
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };

handlePress = (props) =>{
    props.onPress(props.id);
}

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style= {[Styles.random, props.isDisabled && Styles.disabled]}> 
      {props.number} </Text>
      </TouchableOpacity>
  );
}



const Styles = StyleSheet.create({
    random: {
        backgroundColor: '#999',
        width: 100,
        color:'rgba(0, 0, 0, 0.99)', 
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center', 
       },

       disabled : {
        opacity: 0.3
       }
})


