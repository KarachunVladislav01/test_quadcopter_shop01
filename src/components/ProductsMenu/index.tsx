import React, { useEffect, useRef } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { fontClasses } from "../../styles/fontClasses";

import t from "../../language/en.json";
import ProductCard from "../ProductCard";
import { _16, _20, _28 } from "../../constants/sizes";
import { SCREENS } from "../../Navigation/constants";
import { getQuadcopterListFilter } from "../../redux/redusers/project.reducer";
import { getQuadcopterFiltredList } from "../../redux/redusers/quadcopters.reducer";

const ProductsMenu = () => {
    const navigation = useNavigation();
    const scroll = useRef<any>(null);

    const currentFilter = useSelector((state) =>
        getQuadcopterListFilter(state)
    );

    const quadcopterFiltredList = useSelector(
        (state) => getQuadcopterFiltredList(state, currentFilter) || []
    );

    const onPressHandler = (index) => {
        navigation.navigate(SCREENS.ORDER, {
            index,
        });
    };

    useEffect(() => {
        if (scroll == null) return;

        scroll.current.scrollTo({
            x: 0,
            animated: false,
        });
    }, [currentFilter]);

    const scrollViewOptions = {
        horizontal: true,
        showsVerticalScrollIndicator: false,
        showsHorizontalScrollIndicator: false,
        bounces: true,
        alwaysBounceHorizontal: true,
        alwaysBounceVertical: false,
    };

    return (
        <View style={[styles.container]}>
            <Text
                style={[styles.menuHeader, fontClasses.boldBig]}
            >{`${t.all} ${t.quadcopters}`}</Text>
            <ScrollView
                ref={scroll}
                style={[styles.scrollContainer]}
                {...scrollViewOptions}
            >
                {quadcopterFiltredList?.map((item, index) => (
                    <ProductCard
                        key={item.id}
                        style={index === 0 ? styles.firstChild : styles.card}
                        product={item}
                        onPress={(_) => onPressHandler(index)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ProductsMenu;

const styles = StyleSheet.create({
    container: {
        marginBottom: _28,
    },
    menuHeader: {
        paddingHorizontal: _16,
    },

    scrollContainer: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: _20,
    },
    card: {
        marginRight: _16,
    },
    firstChild: {
        marginHorizontal: _16,
    },
});
