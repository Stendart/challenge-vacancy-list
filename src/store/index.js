import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

import * as mockData from '../mock/data.json'

const initialState = {
  vacancy: mockData
}

export const store = createStore(rootReducer, initialState)