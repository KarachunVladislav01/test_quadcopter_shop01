import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import { _16, _164, _233, _20, _22, _32 } from "../../constants/sizes";

const data = require("../../data/data.json");

const { name, price, advertisingSlogan, img } = data.recommendQuadcopter;

const RecomendationCard = ({}) => {
    return (
        <View style={[styles.wrapper]}>
            <View style={[styles.container]}>
                <Image
                    source={{ uri: `data:image/png;base64,${img}` }}
                    style={[styles.img]}
                />

                <Text style={[fontClasses.semiBold, styles.textColor]}>
                    {advertisingSlogan}
                </Text>
                <Text style={[fontClasses.extraBold, styles.textColor]}>
                    {name}
                </Text>
                <Text style={[fontClasses.boldBig, styles.textColor]}>
                    {`${price} $`}
                </Text>
            </View>
        </View>
    );
};

export default RecomendationCard;

const styles = StyleSheet.create({
    wrapper: {
        height: _164,
        width: "100%",
        paddingHorizontal: _16,
        marginTop: _22,
        marginBottom: _32,
    },
    container: {
        position: "relative",

        display: "flex",

        justifyContent: "flex-end",

        height: "100%",
        width: "100%",

        paddingBottom: _20,
        paddingLeft: _20,

        borderRadius: styleConstants.borderRadius_L,
        backgroundColor: theme.blue50,

        shadowColor: styleConstants.shadowColor,
        shadowOpacity: styleConstants.shadowOpacity,
        shadowOffset: styleConstants.shadowOffset,
        shadowRadius: styleConstants.shadowRadius,
    },
    img: {
        position: "absolute",
        right: 0,

        height: _164,
        width: _233,
        resizeMode: "cover",
    },
    textColor: {
        color: theme.white0,
    },
});
