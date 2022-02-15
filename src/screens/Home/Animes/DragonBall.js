import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleEnJp from "../Titles/TitleEnJp";
import Styles from "./Styles";

export default function DragonBall({navigation}) {
    const [dragonBall, setDragonBall] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=dragon-ball-super-broly`)
            .then(res => res.json())
            .then(res => {
                setDragonBall(res);
            })
    }, []);

    return (
        <>
            {
                dragonBall.data && (
                    <SafeAreaView style={{}}>
                        {dragonBall.data.slice(0, 1).map((anime) => (
                            <SafeAreaView key={anime.id} style={Styles.viewDirection}>
                                <ImageHome navigation={navigation} anime={anime} />
                                <TitleEnJp anime={anime} />
                            </SafeAreaView>
                        ))}
                    </SafeAreaView>
                )
            }
        </>
    )
};
