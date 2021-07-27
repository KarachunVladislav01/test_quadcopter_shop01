import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import theme from "../../../styles/theme";
import { fontClasses } from "../../../styles/fontClasses";
import { styleConstants } from "../../../styles/constants";
import { _1, _46, _78 } from "../../../constants/sizes";

import { OptionBtnProps } from "./OptionBtnProps";

const OptionBtn: React.FC<OptionBtnProps> = ({
    label,

    onPress,
    isSelected = false,
    activeOpacity = 0.6,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                isSelected ? styles.selectedBtn : styles.defaultBtn,
            ]}
            onPress={onPress}
            activeOpacity={activeOpacity}
        >
            <Text
                style={[
                    fontClasses.baseLine,
                    isSelected ? styles.selectedtext : styles.defaultText,
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default OptionBtn;

const styles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: _46,
        width: _78,
        borderRadius: styleConstants.borderRadius_M,
    },
    selectedBtn: {
        backgroundColor: theme.blue50,
    },

    defaultBtn: {
        borderStyle: "solid",
        borderWidth: _1,

        borderColor: theme.gray50,
    },
    selectedtext: {
        color: theme.white0,
    },
    defaultText: {
        color: theme.black50,
    },
});
