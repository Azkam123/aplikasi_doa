import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface cardData {
  id?: string;
  judul?: string;
  arab?: string;
  latin?: string;
  terjemah?: string;
}

const Card = ({ judul, id }: cardData) => {
  const router = useRouter();
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.idBox}>
          <Text style={styles.id}>{id}</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => router.push(`/detailDoa?id=${id}`)}>
            <Text style={styles.title}>{judul}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ed9b02",
    borderRadius: 12,
    margin: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 75,
    width: 300,
    overflow: "hidden", // supaya radius tetap bagus
  },
  row: {
    flexDirection: "row",
    flex: 1,
    height: "100%",
  },
  idBox: {
    backgroundColor: "#ffffff",
    width: 60, // lebar kotak ID
    alignItems: "center",
    justifyContent: "center",
  },
  id: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ed9b02",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Card;
