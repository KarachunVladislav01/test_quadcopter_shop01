import React, { useState, useRef } from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    View,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import t from "../../language/en.json";
import { _12, _16, _24, _28, _281, _36, _41, _8 } from "../../constants/sizes";

import { getQuadcopter } from "../../redux/redusers/quadcopters.reducer";

import BackHeader from "../BackHeader";
import TestModal from "../Modal";
import OrderForm from "../OrderForm";

const OrderPage = () => {
    const navigation = useNavigation();
    const route = useRoute<any>();

    const scroll = useRef<any>(null);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const setIsModalVisibleHandler = (value: boolean) => {
        setIsModalVisible(value);
    };

    const closeModalVindow = () => {
        setIsModalVisible(false);
        navigation.goBack();
    };

    const touchableWithoutFeedbackHandler = () => {
        Keyboard.dismiss;

        if (scroll == null) return;
        scroll.current.scrollTo({
            y: 0,
            animated: true,
        });
    };

    const { index } = route.params;

    const quadcopter = useSelector((state) => getQuadcopter(state, index));

    const { name, description, price, img } = quadcopter;

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" backgroundColor={theme.white0} />
            <BackHeader />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[styles.flexContainer]}
            >
                <TouchableWithoutFeedback
                    onPress={touchableWithoutFeedbackHandler}
                >
                    <ScrollView ref={scroll} style={[styles.flexContainer]}>
                        <View style={[styles.inner]}>
                            <View style={[styles.imgWrapper]}>
                                <Image
                                    source={{
                                        uri: `data:image/png;base64,${img}`,
                                    }}
                                    style={[styles.img]}
                                />
                            </View>
                            <View style={[styles.descriptionWrapper]}>
                                <Text
                                    style={[
                                        fontClasses.baseLine,
                                        { color: theme.black50 },
                                    ]}
                                >
                                    {t.ordinaryQuadcopter}
                                </Text>
                                <Text
                                    style={[
                                        fontClasses.extraBoldBig,
                                        styles.nameText,
                                    ]}
                                >
                                    {name}
                                </Text>
                                <Text
                                    style={[
                                        fontClasses.boldBig,
                                        styles.priceText,
                                    ]}
                                >
                                    {`${price} $`}
                                </Text>
                                <Text
                                    style={[
                                        fontClasses.baseLine,
                                        { color: theme.gray300 },
                                    ]}
                                >
                                    {description}
                                </Text>
                            </View>

                            <OrderForm
                                setIsModalVisible={setIsModalVisibleHandler}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <TestModal
                message={t.orderAccepted}
                buttonLabel={t.ok}
                onPress={closeModalVindow}
                isVisible={isModalVisible}
            />
        </SafeAreaView>
    );
};

export default OrderPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: styleConstants.paddingTop,
        backgroundColor: theme.white0,
    },
    flexContainer: {
        flex: 1,
    },

    inner: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: theme.white0,
        paddingHorizontal: _16,
        // paddingBottom: _41,
    },
    imgWrapper: {
        height: _281,
        width: "100%",
    },
    img: {
        resizeMode: "cover",
        height: "100%",
        width: "100%",
    },
    descriptionWrapper: {
        marginTop: _24,
        marginBottom: _36,
    },
    nameText: { color: theme.black50, marginBottom: _8 },
    priceText: { color: theme.blue50, marginBottom: _12 },
    descriptionText: { color: theme.gray300, marginBottom: _36 },
});
