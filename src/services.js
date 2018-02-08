export const gitHubApiFetch = (date,language, per_page) => 
        fetch(`https://api.github.com/search/repositories?q=language:${language}+created:>${date}&per_page=${per_page}&sort=stars`)
            .then((response) => { return response.json() })
    
   

    // ${Language}
    // ${Date} `${}`