import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Styles from "./Styles";

export default function GoBack({ navigation }) {
    return (
        <SafeAreaView style={Styles.viewGoBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={Styles.buttonGoBack}>
                <Icon
                    name="chevron-left"
                    size={24}
                    color="#ffffff"
                    style={Styles.iconButton} />
                <Text style={Styles.goBack}>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
