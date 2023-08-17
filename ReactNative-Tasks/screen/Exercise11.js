import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button11 from "./Button11";

export default function Exercise11() {
  return (
    <View style={styles.container}>
      <Button11  />
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
