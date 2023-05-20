import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput,Button } from "react-native";

const T = () => {
  const [values, setValues] = useState([]);

  const handleChange = (e) => {
    setValues([...values, e.target.value]);
  };

  return (
    <View style={styles.container}>
      <Text>Multiple Text Input</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        onChange={handleChange}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        onChange={handleChange}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        onChange={handleChange}
      />
     <Button onPress={() => console.log(values)} title="ADD"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default T;
