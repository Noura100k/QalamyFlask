import React, { useState } from 'react';
 
import { StyleSheet, Text, Button, Alert, TextInput, SafeAreaView } from 'react-native';

var mainArray = ["One", "two"] ;

export default function SaveText() {

  const [InputDATA, setInputData] = useState(" ");
  const [uritext, seturitext] = useState("");

  const addElementToArray =()=>{
    
    mainArray.push(InputDATA.toString());

    Alert.alert('Data Added Successfully...');

    console.log(mainArray);
  
  }
  return (
    <SafeAreaView style={styleSheet.MainContainer}>

      <Text style={styleSheet.text}> Add TextInput Item To Array in React Native </Text>
 
        <TextInput
          placeholder="Enter Value here"
          onChangeText={item => setInputData(item) }
          style={styleSheet.textInput} />
 
      <Button onPress={addElementToArray}
        title={'Add Item To Array'} />
 
    </SafeAreaView>
  );

}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  text:{
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20
  },

  textInput:{
      textAlign: 'center',
      marginBottom: 20, 
      height: 44,
      width: '88%',
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 7,
  }
});