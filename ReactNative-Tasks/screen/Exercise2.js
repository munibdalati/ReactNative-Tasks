import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";

export default function Exercise2() {
  const pressHandler = () => {
    Alert.alert("Alert", "hello!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => pressHandler()}>
        <Text style={styles.button}>Button 1</Text>
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
