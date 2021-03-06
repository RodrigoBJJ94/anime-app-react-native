import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleEnJp from "../Titles/TitleEnJp";
import Styles from "./Styles";

export default function OnePunchMan({ navigation }) {
    const [onePunchMan, setOnePunchMan] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=one-punch-man`)
            .then(res => res.json())
            .then(res => {
                setOnePunchMan(res);
            })
    }, []);

    return (
        <>
            {onePunchMan.data && (
                <SafeAreaView style={{}}>
                    {onePunchMan.data.slice(0, 1).map((anime) => (
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
