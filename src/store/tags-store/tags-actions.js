import { ADD_TAG, DELETE_TAG } from "./tags-const"

export const addTag = (payload) => {
  return {
    type: ADD_TAG,
    payload
  }
}

export const deleteTag = (id) => {
  return {
    type: DELETE_TAG,
    payload: id
  }
}