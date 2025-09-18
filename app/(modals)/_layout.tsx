import { Stack } from "expo-router";

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: "transparentModal",
        contentStyle: { backgroundColor: "transparent" },
      }}
    />
    // filesystem contains the routes. Page level overrides to the default config can go here if needed
  );
}
