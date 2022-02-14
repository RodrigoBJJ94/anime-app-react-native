import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ImageHome from "../ImageHome";
import TitleEnJp from "../Titles/TitleEnJp";
import Styles from "./Styles";

export default function Shipudden({ navigation }) {
    const [shipudden, setShipudden] = useState({});

    useEffect(() => {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto-shipudden`)
            .then(res => res.json())
            .then(res => {
                setShipudden(res);
            })
    }, []);

    return (
        <>
            {
                shipudden.data && (
                    <SafeAreaView style={{}}>
                        {shipudden.data.slice(0, 1).map((anime) => (
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
