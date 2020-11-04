import reducer from './githubReducer';
import { setUsername } from '../actions/githubActions';

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
});