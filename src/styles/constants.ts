import { StatusBar, Platform } from "react-native";
import { _1, _12, _16, _2, _20, _8 } from "../constants/sizes";
import theme from "../styles/theme";

export const styleConstants = {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    shadowRadius: _16,
    shadowOffset: { width: _2, height: _2 },
    shadowColor: theme.black0,
    shadowOpacity: 0.15,

    borderWidth: _1,
    borderRadius_L: _20,
    borderRadius_M: _12,
    borderRadius_S: _8,
};
