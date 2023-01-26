import { combineReducers } from "redux";
import { vacancyReduser } from "./vacancy-store/vacancy-reduser";
import { tagsReduser } from "./tags-store/tags-reduser";


export const rootReducer = combineReducers({
  vacancy: vacancyReduser,
  tags: tagsReduser
})