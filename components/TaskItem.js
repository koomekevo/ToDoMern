import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox, IconButton } from "react-native-paper";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <View style={styles.container}>
      <Checkbox.Android
        status={task.completed ? "checked" : "unchecked"}
        onPress={() => onToggle(task._id)}
      />
      <Text style={[styles.taskText, task.completed && styles.completedTask]}>
        {task.text}
      </Text>
      <IconButton icon="delete" onPress={() => onDelete(task._id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  taskText: {
    flex: 1,
    marginLeft: 16,
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
});

export default TaskItem;
