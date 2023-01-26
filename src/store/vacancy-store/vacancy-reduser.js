
import { ADD_VACANCY } from "./vacancy-const"


const initState = [
  {
    company: '',
    contract: '',
    featured: true,
    id: 1,
    languages: ['HTML', 'CSS', 'JavaScript'],
    level: '',
    location: "",
    logo: "",
    new: true,
    position: "",
    postedAt: "",
    role: "",
    tools: []
  }
]

// Создаю стор - 16 и 21 видео

export const vacancyReduser = (state = initState, action) => {
  switch(action.type) {
    case ADD_VACANCY:
      return [ ...state, action.payload]
    case '':
      return state
    default: return state
  }

}