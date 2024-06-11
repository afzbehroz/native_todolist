import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useTodos } from "../context/TodoContext";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todos, setTodos } = useTodos();
  const router = useRouter();

  const addTodo = () => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTodos([...todos, newTodo]);
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Done" onPress={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
