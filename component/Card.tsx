import { Text, StyleSheet, View } from "react-native";

interface cardData {
    judul ?: string,
    arab ?: string,
    latin ?: string,
    terjemah ?: string,
}

const Card = ({ judul, latin, arab, terjemah }: cardData) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</Text>
      <Text style={styles.arab}>{arab}</Text>
      <Text style={styles.latin}>{latin}</Text>
      <Text style={styles.terjemah}>Artinnya: {terjemah}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 'auto',
    width: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  arab: {
    fontSize: 24,
    color: "#000",
    marginBottom: 8,
    textAlign: "right",
    fontFamily: "Amiri",
  },
  latin: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 8,
  },
  terjemah: {
    fontSize: 14,
    color: "#444",
  },
  bismillah : {
    justifyContent : 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 6,
  }
});

export default Card;
