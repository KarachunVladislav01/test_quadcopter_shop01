import { EDIT_QUADCOPTER_LIST_FILTER } from "../actions/projectActions";

export enum FiterTypes {
    All,
    Cheap,
    Best,
    Fast,
}

export interface ProjectState {
    quadcopterListFilter: FiterTypes;
}

const initialState: ProjectState = {
    quadcopterListFilter: FiterTypes.All,
};

export function projectState(state: ProjectState = initialState, action) {
    switch (action.type) {
        case EDIT_QUADCOPTER_LIST_FILTER:
            return { ...state, quadcopterListFilter: action.payload };
        default:
            return state;
    }
}

// selectors
export const getQuadcopterListFilter = (state) =>
    state.projectState.quadcopterListFilter;
