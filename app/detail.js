import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTodos } from "../context/TodoContext";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { todos, setTodos } = useTodos();
  const router = useRouter();

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text>Todo not found</Text>
      </View>
    );
  }

  const markAsCompleted = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, completed: true } : t))
    );
    router.push("/");
  };

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text>{todo.description}</Text>
      <Button title="Completed" onPress={markAsCompleted} />
      <View style={styles.footer}>
        <Text>{todo.date}</Text>
        <Button title="Delete" onPress={deleteTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
