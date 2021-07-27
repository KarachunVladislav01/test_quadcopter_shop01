import { FiterTypes } from "./project.reducer";

const data = require("../../data/data.json");

export interface Quadcopter {
    id: string;
    name: string;
    description: string;
    price: number;
    score: number;
    speed: number;
    img: string;
}

export interface QuadcopterList {
    [index: number]: Quadcopter;
}

export function quadcoptersState(
    state: QuadcopterList = data.quadcopterList,
    action
) {
    switch (action.type) {
        default:
            return state;
    }
}

// selectors
export const getQuadcopterFiltredList = (state, filterType?: FiterTypes) => {
    const quadcopterList = state.quadcoptersState;

    switch (filterType) {
        case FiterTypes.All:
            return quadcopterList;
        case FiterTypes.Cheap: {
            let tmpMinIndex = 0;

            quadcopterList?.forEach((item, index) => {
                const price = parseFloat(item.price);
                const tmpMinPrice = parseFloat(
                    quadcopterList[tmpMinIndex].price
                );

                if (tmpMinPrice > price) {
                    tmpMinIndex = index;
                }
            });

            return [quadcopterList[tmpMinIndex]];
        }
        case FiterTypes.Best:
            return quadcopterList.filter((item) => item.score > 4);
        case FiterTypes.Fast: {
            let tmpMinIndex = 0;

            quadcopterList?.forEach((item, index) => {
                const speed = parseFloat(item.speed);
                const tmpMinSpeed = parseFloat(
                    quadcopterList[tmpMinIndex].speed
                );

                if (tmpMinSpeed < speed) {
                    tmpMinIndex = index;
                }
            });

            return [quadcopterList[tmpMinIndex]];
        }
        default:
            return quadcopterList;
    }
};

export const getQuadcopter = (state, index: number) => {
    return state.quadcoptersState[index];
};
