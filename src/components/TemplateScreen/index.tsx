import * as React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";

const TemplateScreen: React.FC<{ pageName: string }> = ({ pageName }) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" />
            <Text style={[fontClasses.extraBold, styles.textColor]}>
                {pageName}
            </Text>
        </SafeAreaView>
    );
};

export default TemplateScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

        backgroundColor: theme.backgroundColorGrey,
    },
    textColor: {
        color: theme.black50,
    },
});
