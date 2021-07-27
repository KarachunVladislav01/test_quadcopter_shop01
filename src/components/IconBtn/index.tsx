import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Icon from "../Icon";
import { IconBtnProps } from "./IconBtnProps";

const IconBtn: React.FC<IconBtnProps> = ({
    style,
    onPress,
    name,
    width,
    height,
    size,
    activeOpacity = 0.6,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onPress}
            style={[{ width: width || size, height: height || size }, style]}
        >
            <Icon
                style={style}
                name={name}
                width={width}
                height={height}
                size={size}
            />
        </TouchableOpacity>
    );
};

export default IconBtn;
