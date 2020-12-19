import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const User = () => {
  const userProfile = useSelector(state => state.user);

  return <div data-testid="user-div">
    <h2>{userProfile.name}</h2>
    <h3>Followers: {userProfile.followers}</h3>
    <h3>Following: {userProfile.following}</h3>
    <a href={userProfile.profileLink}>Github Link: {userProfile.profileLink}</a>
  </div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired
}

export default User