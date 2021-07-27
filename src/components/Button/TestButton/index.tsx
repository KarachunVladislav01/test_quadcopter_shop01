import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { TestButtonProps } from "./TestButtonProps";

import { fontClasses } from "../../../styles/fontClasses";
import { _46 } from "../../../constants/sizes";
import theme from "../../../styles/theme";
import { styleConstants } from "../../../styles/constants";

const TestButton: React.FC<TestButtonProps> = ({
    label,
    onPress,
    width,
    activeOpacity = 0.6,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { width: width || "100%" }]}
            onPress={onPress}
            activeOpacity={activeOpacity}
        >
            <Text style={[fontClasses.baseLine, styles.textColor]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TestButton;

const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: _46,
        width: "100%",

        borderRadius: styleConstants.borderRadius_S,
        backgroundColor: theme.blue50,
    },
    textColor: {
        color: theme.white0,
    },
});
