import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

interface DoaData {
  id: number;
  judul: string;
  arab: string;
  latin: string;
  terjemah: string;
}

const DetailDoa = () => {
  const { id } = useLocalSearchParams();
  const [doa, setDoa] = useState<DoaData | null>(null);
  const [loading, setLoading] = useState(true); // Menambah state loading
  const [error, setError] = useState<string | null>(null); // State untuk error

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://open-api.my.id/api/doa/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDoa(data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch data");
          setLoading(false);
          console.error("Error fetching detail doa:", error);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!doa) {
    return (
      <View style={styles.container}>
        <Text>Data not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{doa.judul}</Text>
      <Text style={styles.bismillah}>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</Text>
      <Text style={styles.arab}>{doa.arab}</Text>
      <Text style={styles.latin}>{doa.latin}</Text>
      <Text style={styles.terjemah}>{doa.terjemah}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  bismillah: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    color: "#4b5563",
  },
  arab: {
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10,
    color: "#4b5563",
  },
  latin: {
    fontSize: 18,
    fontStyle: "italic",
    marginVertical: 8,
    textAlign: "center",
  },
  terjemah: {
    fontSize: 18,
    marginTop: 16,
    textAlign: "center",
    color: "#6b7280",
  },
});

export default DetailDoa;
