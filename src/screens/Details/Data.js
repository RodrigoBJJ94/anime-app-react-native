import React from "react";
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import GoBack from "./GoBack";
import Styles from "./Styles";

export default function DataOne({ navigation, anime }) {
    return (
        <>
            <SafeAreaView style={Styles.viewDirection}>
                <GoBack navigation={navigation} />
                <SafeAreaView style={Styles.viewTitle}>
                    <Text numberOfLines={1} style={Styles.title}>
                        {anime.attributes.titles.en_jp}
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView>
                <ScrollView>
                    <SafeAreaView style={Styles.viewImage}>
                        <Image source={{ uri: anime.attributes.posterImage.original }}
                            style={Styles.image} />
                    </SafeAreaView>
                    <SafeAreaView style={Styles.viewText}>
                        <Text style={Styles.synopsis}>
                            {anime.attributes.synopsis}
                        </Text>
                        <SafeAreaView style={Styles.viewVideo}>
                            <YoutubePlayer height={480} width={354}
                                videoId={anime.attributes.youtubeVideoId} />
                        </SafeAreaView>
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
