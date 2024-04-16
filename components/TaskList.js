import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const renderItem = ({ item }) => (
    <TaskItem task={item} onDelete={onDelete} onToggle={onToggle} />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default TaskList;
