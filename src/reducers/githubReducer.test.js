import reducer from './githubReducer';
import { setUser, setRepos, setSearch } from '../actions/githubActions';

describe('github reducer', () => {
  it('handles the SET_USERNAME action', () => {
    const state = {
      user: {},
      search: '',
      repos: [] 
    };

    const action = setUser(
      { name: 'Michelle' }
      );

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: { name: 'Michelle' },
      search: '',
      repos: []
    })
  });

  it('handles the SET_SEARCH action', () => {
    const state = {
      user: {},
      search: '',
      repos: []
    };

    const action = setSearch('Michelle');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {},
      search: 'Michelle',
      repos: []
    })
  });

  it('handles the SET_REPOS action', () => {
    const state = {
      user: {},
      search: '',
      repos: []
    }; 

    const action = setRepos([
      { repoName: 'michmitz' },
      { repoName: 'michmitz-lab-2'}
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {},
      search: '',
      repos: [
      { repoName: 'michmitz' },
      { repoName: 'michmitz-lab-2'}
    ]})
  }); 
}); 
