import { combineReducers } from "redux";
import { todos } from "./todos/todos-reducer";
import {filter} from './filter/filter-reducer' 

export const reducer = combineReducers({
    todos,
    filter
});