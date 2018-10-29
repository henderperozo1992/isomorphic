import fetch from 'isomorphic-fetch';

export function fetchPopularRepos(language = 'all'){
    return fetch('https://api.github.com/search/repositories?q=tetris+language:' + language + '&sort=stars&order=desc')
            .then((data)=>data.json())
            .then((repos)=>repos.items)
            .catch((error)=>{
                console.warn(error)
                return null
                });
}