import { FiterTypes } from "../redusers/project.reducer";

export const EDIT_QUADCOPTER_LIST_FILTER = "EDIT_QUADCOPTER_LIST_FILTER";

export const editQuadcopterListFilter = (fiterType: FiterTypes) => ({
    type: EDIT_QUADCOPTER_LIST_FILTER,
    payload: fiterType,
});
