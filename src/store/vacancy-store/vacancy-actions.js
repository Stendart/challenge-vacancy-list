import { ADD_VACANCY } from "./vacancy-const"

export const addVacancy = (payload) => {
  return {
    type: ADD_VACANCY,
    payload
  }
}