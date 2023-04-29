export async function searchUser(userName){
    const user = await fetch(`https://api.github.com/users/${userName}`, {
        method: "GET"
    })
    .then(async (res) =>{
        if(res.ok){
            const response = await res.json();
            localStorage.setItem("user", JSON.stringify(response));
            location.replace("./src/pages/profile.html");
            return response;
        }else{
            return location.replace("./src/pages/error.html");
        }
    })

    return user;
}

export async function searchRepos(userName){
    const repos = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: "GET"
    })
    .then(async (res) =>{
        if(res.ok){
            const response = await res.json();
            localStorage.setItem("repos", JSON.stringify(response));
            location.replace("./src/pages/profile.html");
            return response;
        }else{
            return location.replace("./src/pages/error.html");
        }
    })

    return repos;
}