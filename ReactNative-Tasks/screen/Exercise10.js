import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button10 from "./Button10";

export default function Exercise10() {
  return (
    <View style={styles.container}>
      <Button10  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
