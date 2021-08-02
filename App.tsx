import React from "react";

import { useFonts } from "expo-font";

import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import AppLoading from "expo-app-loading";

import { store } from "./src/redux/redusers";

export default function App() {
    let [fontsLoaded] = useFonts({
        "Lato-Regular": require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
        "Lato-Bold": require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
        "Lato-Semibold": require("./src/assets/fonts/Lato/Lato-Semibold.ttf"),
        "Lato-Heavy": require("./src/assets/fonts/Lato/Lato-Heavy.ttf"),
    });

    return (
        <Provider store={store}>
            {fontsLoaded ? <Navigation /> : <AppLoading />}
        </Provider>
    );
}
