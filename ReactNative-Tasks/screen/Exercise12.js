import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function ExerciseScreen({ navigation }) {
  const [listenerCount, setListenerCount] = useState(0);

  useEffect(() => {
    const listener = () => {
      setListenerCount((prevCount) => prevCount + 1);
    };

    // Start listening
    const unsubscribe = navigation.addListener("focus", listener);

    // Clean up: Stop listening when unmounting
    return unsubscribe;
  }, []); // Empty dependency array means it runs only on mount and unmount

  const navigateToListScreen = () => {
    navigation.navigate("2"); //navigate to exercise 2 page
  };

  return (
    <View>
      <Text>Listener Count: {listenerCount}</Text>
      <Button title="Go to List Screen" onPress={navigateToListScreen} />
    </View>
  );
}
