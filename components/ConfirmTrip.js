import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ConfirmTrip = (props) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FE6712",
    padding: 10
  },
  });


export default ConfirmTrip;