import { ADD_TAG, DELETE_TAG } from "./tags-const"

const initState = []

export const tagsReduser = (state = initState, action) => {
  switch(action.type) {
    case ADD_TAG:

      const hasValue = state.find(tag => {
        return tag.title === action.payload
      })

      if(hasValue) {
        return state;
      }

      const newTag = {
        id: Date.now(),
        title: action.payload
      }
      return [ ...state, newTag]
    case DELETE_TAG:
      const filteredTags = state.filter(tag => tag.id !== action.payload);
      return filteredTags
    default: return state
  }

}