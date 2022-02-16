import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { UIActivityIndicator } from "react-native-indicators";
import Styles from "./Styles";

export default function NotLoading() {
    return (
        <SafeAreaView style={Styles.viewDetails}>
            <SafeAreaView style={Styles.viewGoBack}>
                <TouchableOpacity style={Styles.buttonGoBack}>
                    <Icon
                        name="chevron-left"
                        size={24}
                        color="#ffffff"
                        style={Styles.iconButton}
                    />
                    <Text style={Styles.goBack}>Back</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <UIActivityIndicator color="#039eaf" size={50} />
        </SafeAreaView>
    );
};
