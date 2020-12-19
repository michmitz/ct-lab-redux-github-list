import { getUser, getRepos } from '../services/github-api'

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_SEARCH = 'SET_SEARCH';
export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
});

export const SET_REPOS = 'SET_REPOS';
export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
});

export const fetchUser = (search) => dispatch => {
  getUser(search)
    .then(user => {
      dispatch(setUser(user));
    })
};

export const fetchRepos = (search) => dispatch => {
  getRepos(search)
    .then(user => {
      dispatch(setRepos(user));
    })
};

