import { combineReducers } from "redux";

import UserReducers from "./user";
import ContentReducers from "./content"

export default combineReducers({
    UserReducers,
    ContentReducers
})