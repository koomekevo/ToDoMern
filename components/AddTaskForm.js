import React, { useState } from "react";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { addTask } from "../utils/api"; // Assuming you have an API function to add tasks

const AddTaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleAddTask = async () => {
    if (!task.trim()) return; // Prevent adding empty tasks

    try {
      const newTask = await addTask(task);
      setTask("");
      onTaskAdded(newTask); // Notify parent component about the new task
      setSnackbarVisible(true);
    } catch (error) {
      console.error("Error adding task:", error);
      // Handle error, show error message to user
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTask}>
        Add Task
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
      >
        Task added successfully!
      </Snackbar>
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
  input: {
    marginBottom: 10,
    width: "100%",
  },
});

export default AddTaskForm;
