import { searchUser } from "./request.js";

function handleSearch() {
  const input = document.querySelector(".search-user__input");
  const button = document.querySelector("#search-profile");

  button.addEventListener("click", async () => {
    const userName = input.value;

    await searchUser(userName);
    //await searchRepos(userName);
  });
}

handleSearch();
