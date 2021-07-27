import React from "react";
import { Image, StyleSheet } from "react-native";

import { IconProps } from "./IconProps";

import burgerMenu from "../../assets/icons/burgerMenu.png";
import homeDefault from "../../assets/icons/homeDefault.png";
import homeFocused from "../../assets/icons/homeFocused.png";
import heartDefault from "../../assets/icons/heartDefault.png";
import heartFocused from "../../assets/icons/heartFocused.png";
import searchDefault from "../../assets/icons/searchDefault.png";
import searchFocused from "../../assets/icons/searchFocused.png";
import shopDefault from "../../assets/icons/shopDefault.png";
import shopFocused from "../../assets/icons/shopFocused.png";
import ratingStar from "../../assets/icons/ratingStar.png";
import backArrow from "../../assets/icons/backArrow.png";
import order from "../../assets/icons/order.png";

import { _32 } from "../../constants/sizes";

const iconList: { [key: string]: any } = {
    burgerMenu,
    homeDefault,
    homeFocused,
    heartDefault,
    heartFocused,
    searchDefault,
    searchFocused,
    shopDefault,
    shopFocused,
    ratingStar,
    backArrow,
    order,
};

const Icon: React.FC<IconProps> = ({
    style,
    name,
    width,
    height,
    size = _32,
}) => {
    return (
        <Image
            source={iconList[name]}
            style={[{ width: width || size, height: height || size }, style]}
        />
    );
};

export default Icon;
