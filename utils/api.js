const API_URL = "http://localhost:5000/api"; // Update with your actual API URL

// Fetch all tasks from the server
export const getTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching tasks:", error);
  }
};

// Add a new task to the server
export const addTask = async (taskText) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: taskText }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error adding task:", error);
  }
};

// Delete a task from the server
export const deleteTask = async (taskId) => {
  try {
    await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw new Error("Error deleting task:", error);
  }
};

// Toggle task completion status on the server
export const toggleTaskCompletion = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}/toggle`, {
      method: "PUT",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error toggling task completion:", error);
  }
};
