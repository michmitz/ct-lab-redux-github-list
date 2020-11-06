import React from 'react';
import RepoItem from './RepoList/RepoItem';
import User from './User/User';
import UsernameForm from './UsernameForm/UsernameForm';

export default function App() {
  return <>
    <UsernameForm />
    <User />
    <RepoItem />
    </>;
}
