import { combineReducers, createStore } from "redux";

import { quadcoptersState } from "./quadcopters.reducer";
import { projectState } from "./project.reducer";

const rootReducer = combineReducers({
    quadcoptersState,
    projectState,
});

export const store = createStore(rootReducer);
