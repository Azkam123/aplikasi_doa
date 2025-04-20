// app/index.tsx
import { Text, View, StyleSheet } from "react-native";
import Card from "@/component/Card";

export default function Index() {
  return (
    <View style={styles.container}>
      <Card judul="judul" arab="arab" terjemah="terjemah" latin="latin"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#ff0000',
  }
})
