import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleEnJp from "../Titles/TitleEnJp";
import Styles from "./Styles";

export default function SaintSeiya({ navigation }) {
    const [saintSeiya, setSaintSeiya] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=saint-seiya-the-hades-chapter-inferno`)
            .then(res => res.json())
            .then(res => {
                setSaintSeiya(res);
            })
    }, []);

    return (
        <>
            {saintSeiya.data && (
                <SafeAreaView style={{}}>
                    {saintSeiya.data.slice(0, 1).map((anime) => (
                        <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                            <ImageHome navigation={navigation} anime={anime} />
                            <TitleEnJp anime={anime} />
                        </SafeAreaView>
                    ))}
                </SafeAreaView>
            )}
        </>
    )
};
