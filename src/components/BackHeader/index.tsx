import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconBtn from "../IconBtn";

import { _44, _52, _8, _4, _16 } from "../../constants/sizes";

const BackHeader = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container]}>
            <IconBtn name={"backArrow"} size={_44} onPress={(_) => goBack()} />
        </View>
    );
};

export default BackHeader;

const styles = StyleSheet.create({
    container: {
        paddingVertical: _4,
        paddingHorizontal: _16,
        marginTop: _8,
    },
});
