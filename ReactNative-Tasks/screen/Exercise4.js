import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Exercise4() {
  const [count, setCount] = useState(0);
  const pressHandler = () => {
    setCount(count+1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You've preseed the button {count} time(s)</Text>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.button}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    color: "white",
    marginTop: 10,
    backgroundColor: "coral",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  text: {
    marginTop: 20,
  },
});
