import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Styles from "./Animes/Styles";

export default function Button({ navigation }) {
    return (
        <TouchableOpacity style={Styles.buttonSearch}
            onPress={() => navigation.navigate("Search")}>
            <Icon
                name="search"
                size={30}
                color="#039eaf"
                style={Styles.search} />
        </TouchableOpacity>
    );
};
