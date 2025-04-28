// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Doa-Doa Harian",
          headerStyle: { backgroundColor: "#ffa500" },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="listDoa"
        options={{
          title: "List Doa Doa Harian",
          headerStyle: { backgroundColor: "#cbab0a" },
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="detailDoa"
        options={{
          title: "Detail Doa",
          headerStyle: { backgroundColor: "#cbab0a" },
          headerShown: true,
        }}
      />
    </Stack>
  );
}
