import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, Animated } from "react-native";
import { background } from "./Background";
import Statusbar from "./Statusbar";
import Button from "./Button";
import DeathNote from "./Animes/DeathNote";
import Kimetsu from "./Animes/Kimetsu";
import Jujutsu from "./Animes/Jujutsu";
import Bleach from "./Animes/Bleach";
import Naruto from "./Animes/Naruto";
import OnePunchMan from "./Animes/OnePunchMan";
import OnePiece from "./Animes/OnePiece";
import Styles from "./Styles";

export default function Home({ navigation }) {
    const { width } = Dimensions.get("screen");
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={Styles.homeView}>
            <Statusbar />
            <SafeAreaView style={StyleSheet.absoluteFillObject}>
                {background.map((image, index) => {
                    const inputRange = [
                        (index - 1) * width, index * width, (index + 1) * width
                    ];
                    const opacity = scrollX.interpolate({
                        inputRange, outputRange: [0, 1, 0]
                    });
                    return <Animated.Image
                        key={`image-${index}`} source={{ uri: image }}
                        style={[StyleSheet.absoluteFillObject, { opacity }]}
                        blurRadius={20} />
                })}
            </SafeAreaView>
            <Button navigation={navigation} />
            <Animated.ScrollView horizontal={true} pagingEnabled={true}
                showsHorizontalScrollIndicator={false} onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true })}>
                <DeathNote navigation={navigation} />
                <Naruto navigation={navigation} />
                <Bleach navigation={navigation} />
                <Kimetsu navigation={navigation} />
                <Jujutsu navigation={navigation} />
                <OnePiece navigation={navigation} />
                <OnePunchMan navigation={navigation} />
            </Animated.ScrollView>
        </SafeAreaView >
    );
};
