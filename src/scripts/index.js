import { searchUser } from "./request.js";
import { searchRepos } from "./request.js";

function handleSearch(){
    const input = document.querySelector(".search-user__input");
    const button = document.querySelector("#search-profile");

    button.addEventListener("click", async () =>{
        const userName = input.value;

        console.log("clicado")

        await searchUser(userName);
        //await searchRepos(userName);
    })
}

handleSearch();