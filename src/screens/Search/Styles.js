import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    searchMain: {
        flex: 1,
        backgroundColor: '#252525',
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
        width: 150,
        height: 165,
        borderRadius: 6,
    },
    titles: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 13.5,
        color: '#ffffff',
        textAlign: "center",
        fontFamily: "Montserrat-Regular",
    },
    search: {
        marginLeft: 28,
        marginRight: 28,
        marginTop: 12,
        marginBottom: 20,
        color: '#ffffff',
        borderBottomWidth: 1.5,
        borderBottomColor: '#039eaf',
        fontSize: 20,
        fontFamily: "Montserrat-Regular",
    },
    goBack: {
        color: "#ffffff",
        fontSize: 15,
        position: "absolute",
        marginLeft: 18,
        fontFamily: "Montserrat-Bold",
    },
    buttonGoBack: {
        position: "absolute",
        height: 30,
        width: "25%",
        marginTop: 42,
        justifyContent: "center",
    },
    iconButton: {
        marginLeft: -1,
    },
    viewGoBack: {
        backgroundColor: "#039eaf",
        width: "100%",
        paddingTop: 74,
        paddingBottom: 6,
    }
});
