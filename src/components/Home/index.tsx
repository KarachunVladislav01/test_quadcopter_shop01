import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../../styles/theme";

import Header from "../Header";
import RecomendationCard from "../RecomendationCard";
import FilterList from "../FilterList";
import ProductsMenu from "../ProductsMenu";

const Home = () => {
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar style="auto" />
            <Header />
            <RecomendationCard />

            <FilterList />

            <ProductsMenu />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: theme.backgroundColorGrey,
    },
});
