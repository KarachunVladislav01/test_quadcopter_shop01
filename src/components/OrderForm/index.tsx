import React, { useRef, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { TextInputMask } from "react-native-masked-text";

import theme from "../../styles/theme";
import { fontClasses } from "../../styles/fontClasses";
import { styleConstants } from "../../styles/constants";
import t from "../../language/en.json";
import { _41, _8, _24, _28 } from "../../constants/sizes";

import TestButton from "../Button/TestButton";

const OrderForm: React.FC<{ setIsModalVisible: (value: boolean) => void }> = ({
    setIsModalVisible,
}) => {
    const phoneNumberRef = useRef<any>(null);
    const [userName, setUserName] = useState("");
    const [isUserNameError, setIsUserNameError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("+375");
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);

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

    return (
        <View style={[styles.container]}>
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
            <TestButton label={t.order} onPress={sendOrderData} />
        </View>
    );
};

export default OrderForm;

const styles = StyleSheet.create({
    container: {
        marginBottom: _41,
    },

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
