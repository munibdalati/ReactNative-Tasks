import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/Home Screen";
import Exercise1 from "./screen/Exercise1";
import Exercise2 from "./screen/Exercise2";
import Exercise3 from "./screen/Exercise3";
import Exercise4 from "./screen/Exercise4";
import Exercise5 from "./screen/Exercise5";
import Exercise6 from "./screen/Exercise6";
import Exercise7 from "./screen/Exercise7";
import Exercise8 from "./screen/Exercise8";
import Exercise9 from "./screen/Exercise9";
import Exercise10 from "./screen/Exercise10";
import Exercise11 from "./screen/Exercise11";
import Exercise12 from "./screen/Exercise12";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="Hello World!" component={Exercise1} />
        <Stack.Screen name="2" component={Exercise2} />
        <Stack.Screen name="3" component={Exercise3} />
        <Stack.Screen name="4" component={Exercise4} />
        <Stack.Screen name="5" component={Exercise5} />
        <Stack.Screen name="6" component={Exercise6} />
        <Stack.Screen name="7" component={Exercise7} />
        <Stack.Screen name="8" component={Exercise8} />
        <Stack.Screen name="9" component={Exercise9} />
        <Stack.Screen name="10" component={Exercise10} />
        <Stack.Screen name="11" component={Exercise11} />
        <Stack.Screen name="12" component={Exercise12} />
      </Stack.Navigator>
    </NavigationContainer>
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
