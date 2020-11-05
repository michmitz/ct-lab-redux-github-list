import { getUser, getFollowers, getRepos } from '../services/github-api'

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username
});

export const SET_FOLLOWERS = 'SET_FOLLOWERS';
export const setFollowers = followers => ({
  type: SET_FOLLOWERS,
  payload: followers
});

export const SET_REPOS = 'SET_REPOS';
export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
});

export const fetchUser = (userName) => dispatch => {
  getUser(userName)
    .then(user => {
      dispatch(setUsername(user));
    })
};


export const fetchFollowers = (userName) => dispatch => {
  getFollowers(userName)
    .then(user => {
      dispatch(setFollowers(user));
    })
};

export const fetchRepos = (userName) => dispatch => {
  getRepos(userName)
    .then(user => {
      dispatch(setRepos(user));
    })
};

