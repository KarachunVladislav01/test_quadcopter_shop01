import React, { useState, useRef } from "react";
import {
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    View,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { TextInputMask } from "react-native-masked-text";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import t from "../../language/en.json";
import {
    _12,
    _16,
    _24,
    _28,
    _281,
    _36,
    _41,
    _52,
    _8,
} from "../../constants/sizes";

import { getQuadcopter } from "../../redux/redusers/quadcopters.reducer";

import BackHeader from "../BackHeader";
import TestButton from "../Button/TestButton";
import TestModal from "../Modal";

const OrderPage = () => {
    const navigation = useNavigation();
    const route = useRoute<any>();
    const phoneNumberRef = useRef<any>(null);
    const scroll = useRef<any>(null);

    const [userName, setUserName] = useState("");
    const [isUserNameError, setIsUserNameError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("+375");
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const setUserNameHandler = (value) => {
        if (value.length > 30) return;

        if (value.length > 1) setIsUserNameError(false);
        setUserName(value);
    };

    const setPhoneNumberHandler = (value) => {
        if (value.length > 19) return;

        if (value.length === 19) setIsPhoneNumberError(false);
        setPhoneNumber(value);
    };

    const closeModalVindow = () => {
        setIsModalVisible(false);
        navigation.goBack();
    };

    const sendOrderData = () => {
        if (userName.length < 2) {
            setIsUserNameError(true);
            if (phoneNumber.length < 19) {
                setIsPhoneNumberError(true);
                return;
            }
            return;
        } else if (phoneNumber.length < 19) {
            setIsPhoneNumberError(true);
            return;
        }
        setIsModalVisible(true);
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
            <StatusBar style="auto" />
            <BackHeader />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={[styles.container]}
            >
                <TouchableWithoutFeedback
                    onPress={touchableWithoutFeedbackHandler}
                >
                    <ScrollView ref={scroll} style={[styles.container]}>
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
                            <View style={[styles.orderWrapper]}>
                                <TextInput
                                    placeholder={t.name}
                                    placeholderTextColor={theme.gray300}
                                    style={[
                                        fontClasses.baseLine,
                                        styles.inputStyle,
                                        styles.nameInput,
                                        isUserNameError
                                            ? styles.inputErrorColor
                                            : styles.inputDefaultColor,
                                    ]}
                                    value={userName}
                                    onChangeText={setUserNameHandler}
                                />
                                <TextInputMask
                                    ref={phoneNumberRef}
                                    type={"cel-phone"}
                                    options={{
                                        maskType: "BRL",
                                        withDDD: true,
                                        dddMask: "+375 (99) 999-99-99",
                                    }}
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumberHandler}
                                    placeholder={t.phone}
                                    placeholderTextColor={theme.gray300}
                                    style={[
                                        fontClasses.baseLine,
                                        styles.inputStyle,
                                        styles.phoneInput,
                                        isPhoneNumberError
                                            ? styles.inputErrorColor
                                            : styles.inputDefaultColor,
                                    ]}
                                    defaultValue={t.defaultPhoneCode}
                                    autoCompleteType="tel"
                                    dataDetectorTypes="phoneNumber"
                                    keyboardType="phone-pad"
                                    textContentType="telephoneNumber"
                                />
                                <TestButton
                                    label={t.order}
                                    onPress={sendOrderData}
                                />
                            </View>
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
        backgroundColor: theme.white0,
    },
    inner: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: theme.white0,
        paddingHorizontal: _16,
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
    orderWrapper: {
        marginBottom: _41,
    },
    nameText: { color: theme.black50, marginBottom: _8 },
    priceText: { color: theme.blue50, marginBottom: _12 },
    descriptionText: { color: theme.gray300, marginBottom: _36 },
    inputStyle: {
        paddingBottom: _8,
        borderBottomWidth: styleConstants.borderWidth,
        borderStyle: "solid",
        borderColor: theme.gray50,
        color: theme.black50,
    },
    inputDefaultColor: {
        borderColor: theme.gray50,
    },
    inputErrorColor: {
        borderColor: theme.red50,
    },
    nameInput: {
        marginBottom: _24,
    },
    phoneInput: {
        marginBottom: _28,
    },
});
