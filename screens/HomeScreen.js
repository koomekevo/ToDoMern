import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>Welcome to ToDoMern!</Title>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("TodoList")} // Navigate to TodoListScreen
      >
        Go to Todo List
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
