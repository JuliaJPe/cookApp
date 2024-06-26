import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated"
import { Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { theme } from "@/theme"
import { Button } from "../Button"

type Props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
      <View style={styles.header}>
        <Text style={styles.label}> {quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>

      <Button title="Buscar Receitas" onPress={onSearch} />
    </Animated.View>
  )
}
