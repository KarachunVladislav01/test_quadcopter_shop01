import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { styleConstants } from "../styles/constants";
import { _12, _24, _96 } from "../constants/sizes";

import { SCREENS } from "./constants";

import Home from "../components/Home";
import TemplateScreen from "../components/TemplateScreen";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

const focusedIcon = "Focused";
const defaultIcon = "Default";

const NavigationBar = ({}) => {
    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    style: [styles.container],
                    showLabel: false,
                    tabStyle: [styles.tab],
                }}
            >
                <Tab.Screen
                    name={SCREENS.HOME}
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                name={`home${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={SCREENS.LIKED}
                    children={() => <TemplateScreen pageName="Liked" />}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                name={`heart${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={SCREENS.SEARCH}
                    children={() => <TemplateScreen pageName="Search" />}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                name={`search${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={SCREENS.SHOP}
                    children={() => <TemplateScreen pageName="Shop" />}
                    options={{
                        tabBarIcon: ({ focused, size }) => (
                            <Icon
                                name={`shop${
                                    focused ? focusedIcon : defaultIcon
                                }`}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default NavigationBar;

const styles = StyleSheet.create({
    container: {
        display: "flex",

        height: _96,
        borderTopWidth: 0,

        borderTopLeftRadius: styleConstants.borderRadius_M,
        borderTopRightRadius: styleConstants.borderRadius_M,

        shadowColor: styleConstants.shadowColor,
        shadowOpacity: styleConstants.shadowOpacity,
        shadowOffset: styleConstants.shadowOffset,
        shadowRadius: styleConstants.shadowRadius,
        elevation: 20,
    },
    tab: {
        display: "flex",
        paddingBottom: _12,
    },
});
