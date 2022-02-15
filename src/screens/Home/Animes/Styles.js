import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    viewDirection: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        width: Dimensions.get("screen").width,
    },
    buttonSearch: {
        width: "100%",
        alignItems: "center",
        height: 65,
        marginTop: 30,
    },
    search: {
        alignSelf: "flex-end",
        paddingTop: 20,
        paddingRight: 25,
    },
    image: {
        width: 340,
        height: 580,
        borderRadius: 25,
    }
});
