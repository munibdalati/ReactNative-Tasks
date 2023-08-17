import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function Exercise7() {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    Alert.alert("Alert", `Hello ${text}!`, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        onChangeText={changeHandler}
      />
      <TouchableOpacity onPress={() => pressHandler()}>
        <Text style={styles.button}>Say hello</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
    justifyContent: "center",
    color: "white",
    marginTop: 10,
    backgroundColor: "coral",
    paddingVertical: 20,
    textAlign: "center",
  },
  inputLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#d9dada",
    marginTop: 10,
    padding: 5,
  },
});
