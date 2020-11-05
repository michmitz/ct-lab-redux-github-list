import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, fetchUser, fetchFollowers, fetchRepos } from '../../../actions/githubActions';

const UsernameForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.username);
  
  const handleChange = ({ target }) => {
    dispatch(setUsername(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(fetchUser(userName));
    dispatch(fetchFollowers(userName));
    dispatch(fetchRepos(userName));
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
    <textarea onChange={handleChange} placeholder="username"></textarea>
    </label>
    <button>Submit</button>
    </form>
  );
};

export default UsernameForm;
