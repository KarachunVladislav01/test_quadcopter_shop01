import { IconProps } from "../Icon/IconProps";

export interface IconBtnProps extends IconProps {
    activeOpacity?: number;
    onPress: (event) => void;
}
