import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function GetStarted() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        style={styles.masjid}
        source={require("@/assets/images/desain-aplikasi.jpg")}
      />
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo-aplikasi.png")}
      />
      <Text style={styles.title}>Selamat Datang di Doa Doa Harian</Text>
      <Text style={styles.subtitle}>
        Temukan ketenangan anda setiap hari melalui doa-doa pilihan anda.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/listDoa")}
      >
        <Text style={styles.buttonText}>Mulai Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#aabea7",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#cbab0a",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  masjid:{
    width:350,
    height:270,
    opacity: 0.2,
    marginTop: -135,
  }
});
