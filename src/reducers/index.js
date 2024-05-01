import { combineReducers } from "redux";

import UserReducers from "./user";
import ContentReducers from "./content"
import UjianReducers from "./ujian"

export default combineReducers({
    UserReducers,
    ContentReducers,
    UjianReducers
})