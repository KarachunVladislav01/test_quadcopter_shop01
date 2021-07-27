import * as React from "react";
import { StyleSheet, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { editQuadcopterListFilter } from "../../redux/actions/projectActions";

import {
    getQuadcopterListFilter,
    FiterTypes,
} from "../../redux/redusers/project.reducer";

import t from "../../language/en.json";
import { _16, _14, _28 } from "../../constants/sizes";

import OptionBtn from "../Button/OptionBtn";

const FilterList = () => {
    const dispatch = useDispatch();

    const currentFilter = useSelector(getQuadcopterListFilter);

    const getIsSelected = (filterType) => {
        return filterType === currentFilter;
    };

    const onPressFilterHandler = (filterType) => {
        dispatch(editQuadcopterListFilter(filterType));
    };

    return (
        <View style={[styles.wrapper]}>
            <View style={[styles.container]}>
                <OptionBtn
                    label={t.all}
                    isSelected={getIsSelected(FiterTypes.All)}
                    onPress={(_) => onPressFilterHandler(FiterTypes.All)}
                />
                <OptionBtn
                    label={t.cheap}
                    isSelected={getIsSelected(FiterTypes.Cheap)}
                    onPress={(_) => onPressFilterHandler(FiterTypes.Cheap)}
                />
                <OptionBtn
                    label={t.best}
                    isSelected={getIsSelected(FiterTypes.Best)}
                    onPress={(_) => onPressFilterHandler(FiterTypes.Best)}
                />
                <OptionBtn
                    label={t.fast}
                    isSelected={getIsSelected(FiterTypes.Fast)}
                    onPress={(_) => onPressFilterHandler(FiterTypes.Fast)}
                />
            </View>
        </View>
    );
};

export default FilterList;

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        paddingLeft: _16,
        paddingRight: _14,
        marginBottom: _28,
    },
    container: {
        position: "relative",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
