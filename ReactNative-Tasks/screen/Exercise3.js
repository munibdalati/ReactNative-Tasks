import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";

export default function Exercise3() {
  const helloHandler = () => {
    Alert.alert("Alert", "Hello!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const byeHandler = () => {
    Alert.alert("Alert", "Goodbye!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => helloHandler()}>
        <Text style={styles.button}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => byeHandler()}>
        <Text style={styles.button}>Say Goodbye</Text>
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
    backgroundColor:"coral",
    paddingHorizontal: 40,
    paddingVertical: 20

  },
});
