// app/_layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
          headerStyle: { backgroundColor: '#ffa500' }, 
          headerShown:true,
        }}
      />
    </Stack>
  );
}
