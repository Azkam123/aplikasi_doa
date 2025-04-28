import { ScrollView, View, Text, StyleSheet } from "react-native";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!doa) {
    return (
      <View style={styles.centered}>
        <Text>Data not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{doa.judul}</Text>
      <Text style={styles.bismillah}>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</Text>
      <Text style={styles.arab}>{doa.arab}</Text>
      <Text style={styles.latin}>Latin: {doa.latin}</Text>
      <Text style={styles.terjemah}>Artinya: {doa.terjemah}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#9db193",
    flexGrow: 1,
    justifyContent: "center",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9db193",
    padding: 16,
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
    color: "#090b0f",
  },
  arab: {
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10,
    color: "#070a0e",
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
    color: "#050609",
  },
});

export default DetailDoa;
