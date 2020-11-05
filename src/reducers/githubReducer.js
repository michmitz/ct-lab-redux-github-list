import { SET_SEARCH, SET_USER, SET_REPOS } from "../actions/githubActions";

const initialState = {
  user: {},
  search: '',
  repos: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}
