export const getUser = async(userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name
    }));
};

export const getFollowers = async(userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => ({
      followers: json.followers
    }));
};

export const getRepos = async(userName) => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.url
    })));
};

