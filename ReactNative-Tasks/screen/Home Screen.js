import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the home Screen</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 1"
            onPress={() => {
              navigation.navigate("Hello World!");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 2"
            onPress={() => {
              navigation.navigate("2");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 3"
            onPress={() => {
              navigation.navigate("3");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 4"
            onPress={() => {
              navigation.navigate("4");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 5"
            onPress={() => {
              navigation.navigate("5");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 6"
            onPress={() => {
              navigation.navigate("6");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 7"
            onPress={() => {
              navigation.navigate("7");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 8"
            onPress={() => {
              navigation.navigate("8");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 9"
            onPress={() => {
              navigation.navigate("9");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 10"
            onPress={() => {
              navigation.navigate("10");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 11"
            onPress={() => {
              navigation.navigate("11");
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Exercise 12"
            onPress={() => {
              navigation.navigate("12");
            }}
          />
        </View>
      </View>
      <StatusBar style="auto" />
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
  buttonContainer: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginVertical: 5,
  },
});
