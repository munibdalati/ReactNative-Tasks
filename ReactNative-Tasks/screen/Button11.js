import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function Button11() {
  const [count, setCount] = useState(0);
  const pressHandler = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.button}>
      <Text style={styles.text}>You've preseed the button {count} time(s)</Text>
      <Button title="Press me" onPress={pressHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
