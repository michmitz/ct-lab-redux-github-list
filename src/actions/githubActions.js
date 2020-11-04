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
})