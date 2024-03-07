import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";


export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes</Text>

      </View>

    
      
      <FlatList
          data={["1"]}
          keyExtractor={(item) => item}
          renderItem={() => (
            <Recipe
              recipe={{
                name: "Lasanha",
                image: "https://www.receiteria.com/wp-content/uploads/2016/09/receita-de-lasanha-730x430.jpg",
                minutes: 10,
              }}
            />
          )}
        />

    </View>
  );
}
