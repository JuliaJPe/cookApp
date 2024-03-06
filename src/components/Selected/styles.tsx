import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        padding: 24,
        borderRadius: theme.borderRadius.lg,
        position: "absolute",
        bottom: 20,
        width: "100%",
        alignSelf: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 34,
    },
    label: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.regular,
    },
})