import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    searchMain: {
        flex: 1,
        backgroundColor: '#343434',
    },
    searchDirection: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    searchContainer: {
        width: Dimensions.get("screen").width / 2.7,
        marginRight: 20,
        marginLeft: 20,
        alignItems: "center",
    },
    searchIcon: {
        alignSelf: 'flex-end',
        marginTop: -58,
        marginRight: 28,
    },
    image: {
        width: 155,
        height: 175,
        borderRadius: 6,
    },
    titles: {
        marginTop: 12,
        marginBottom: 12,
        fontSize: 13.5,
        color: '#ffffff',
        textAlign: "center",
        fontFamily: "Montserrat-Regular",
    },
    search: {
        marginLeft: 28,
        marginRight: 28,
        marginTop: 45,
        marginBottom: 20,
        color: '#ffffff',
        borderBottomWidth: 1.5,
        borderBottomColor: '#039eaf',
        fontSize: 20,
        fontFamily: "Montserrat-Regular",
    }
});
