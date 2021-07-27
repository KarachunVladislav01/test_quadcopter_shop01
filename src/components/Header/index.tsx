import React from "react";
import { StyleSheet, Text, View } from "react-native";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";

import IconBtn from "../IconBtn";

import { _19, _24, _28, _52, _8 } from "../../constants/sizes";
import t from "../../language/en.json";

const Header = () => {
    return (
        <View style={[styles.container]}>
            <Text style={[fontClasses.extraBold, styles.leftText]}>
                {t.siteName}
            </Text>
            <IconBtn name={"burgerMenu"} size={_28} onPress={() => {}} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        height: _52,
        width: "100%",

        paddingLeft: _19,
        paddingRight: _24,

        marginTop: _8,
        backgroundColor: "transparent",
    },
    leftText: {
        color: theme.black50,
    },
});
