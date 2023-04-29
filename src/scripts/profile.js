import { renderUserInfo } from "./render.js";
import { renderRepos } from "./render.js";

export async function showAllUserInfos(){
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const reposUser = JSON.parse(localStorage.getItem("repos"));
    const list = document.querySelector(".list");

    list.innerHTML = "";
    renderUserInfo(userInfo);

    reposUser.forEach(repoUser => {
        console.log(repoUser);
        renderRepos(repoUser);
        
    })
}

showAllUserInfos();