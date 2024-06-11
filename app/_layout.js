import { Stack } from "expo-router";
import { TodoProvider } from "../context/TodoContext";

export default function RootLayout() {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerStyle: { backgroundColor: "green" },
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: "Home",
            headerStyle: { backgroundColor: "lightgreen" },
          }}
        />
        <Stack.Screen
          name="detail"
          options={{
            headerTitle: "Todo Detail",
            headerStyle: { backgroundColor: "lightsalmon" },
          }}
        />
        <Stack.Screen
          name="add"
          options={{
            headerTitle: "Add Todo",
            headerStyle: { backgroundColor: "lightblue" },
          }}
        />
      </Stack>
    </TodoProvider>
  );
}
