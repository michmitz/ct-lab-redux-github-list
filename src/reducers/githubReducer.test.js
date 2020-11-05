import reducer from './githubReducer';
import { setUsername, setFollowers, setRepos } from '../actions/githubActions';

describe('github reducer', () => {
  it('handles the SET_USERNAME action', () => {
    const state = {
      username: '',
      followers: 0,
      repos: [] 
    };

    const action = setUsername('Michelle');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      username: 'Michelle',
      followers: 0,
      repos: []
    })
  });

  it('handles the SET_FOLLOWERS action', () => {
    const state = {
      username: '',
      followers: 0,
      repos: []
    };

    const action = setFollowers(10);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      username: '',
      followers: 10,
      repos: []
    })
  });

  it('handles the SET_REPOS action', () => {
    const state = {
      username: '',
      followers: 0,
      repos: []
    };

    const action = setRepos([
      { repoName: 'michmitz' },
      { repoName: 'michmitz-lab-2'}
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      username: '',
      followers: 0,
      repos: [
      { repoName: 'michmitz' },
      { repoName: 'michmitz-lab-2'}
    ]})
  });
});
