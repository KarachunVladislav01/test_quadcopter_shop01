import { Dimensions } from "react-native";

export default (size, defaultWidth = 375) => {
    const { width } = Dimensions.get("window");
    return (size * width) / defaultWidth;
};
