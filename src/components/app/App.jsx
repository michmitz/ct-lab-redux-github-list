import React from 'react';
import RepoList from './RepoList/RepoList';
import User from './User/User';
import UsernameForm from './UsernameForm/UsernameForm';

export default function App() {
  return <>
    <UsernameForm />
    <User />
    <RepoList />
    </>;
}
