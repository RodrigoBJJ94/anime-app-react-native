import React from "react";
import { SafeAreaView, TouchableOpacity, Image, Text } from "react-native";
import Styles from "./Styles";

export default function Data({ navigation, anime }) {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Details", {
                    anime: anime.attributes.canonicalTitle
                });
            }}>
                <Image style={Styles.image}
                    source={{ uri: anime.attributes.posterImage.small }} />
            </TouchableOpacity>
            <Text numberOfLines={1} style={Styles.titles}>
                {anime.attributes.canonicalTitle}
            </Text>
        </SafeAreaView>
    );
};
