export const getUser = async(search) => {
  return fetch(`https://api.github.com/users/${search}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      followers: json.followers,
      following: json.following,
      profileLink: json.html_url
    }));
};

export const getRepos = async(search) => {
  return fetch(`https://api.github.com/users/${search}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.url
    })));
};

