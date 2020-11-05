import { SET_FOLLOWERS, SET_USERNAME, SET_REPOS } from "../actions/githubActions";

const initialState = {
  username: '',
  followers: 0,
  repos: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_FOLLOWERS:
      return { ...state, followers: action.payload };
    case SET_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}
