import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Styles from "./Styles";

export default function Button({ setTextSearch, text }) {
    return (
        <TouchableOpacity
            onPress={() => setTextSearch(text)}>
            <Icon
                name="search"
                size={30}
                color="#ea4335"
                style={Styles.searchIcon}
            />
        </TouchableOpacity>
    );
};
