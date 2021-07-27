import React from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { BlurView } from "expo-blur";

import { _16, _24, _28, _36, _92, _146 } from "../../constants/sizes";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";

import TestButton from "../Button/TestButton";
import Icon from "../Icon";

const TestModal = ({ message, buttonLabel, onPress, isVisible }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            statusBarTranslucent={true}
        >
            <BlurView style={styles.centeredView} intensity={100} tint={"dark"}>
                <View style={styles.modalView}>
                    <Icon name="order" size={_92} />
                    <Text style={[fontClasses.baseLine, styles.text]}>
                        {message}
                    </Text>
                    <TestButton
                        label={buttonLabel}
                        onPress={onPress}
                        width={_146}
                    />
                </View>
            </BlurView>
        </Modal>
    );
};

export default TestModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.black50,
        paddingHorizontal: _16,
    },
    modalView: {
        width: "100%",

        display: "flex",
        alignItems: "center",

        paddingTop: _36,
        paddingBottom: _24,

        backgroundColor: theme.white0,
        borderRadius: styleConstants.borderRadius_L,
    },
    text: {
        color: theme.gray300,
        marginBottom: _28,
    },
});
