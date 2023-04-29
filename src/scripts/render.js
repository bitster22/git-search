export function renderUserInfo(user){
    const header = document.querySelector("#profile-header");

    const divUserContainer = document.createElement("div");

    const divImage = document.createElement("div");
    const titleName = document.createElement("h1");

    const button = document.createElement("button");

    divUserContainer.classList.add("user", "flex");

    divImage.classList.add("user__image");
    titleName.classList.add("user__name", "flex", "flex__align-center", "color-grey-7", "font-bolder-weight");

    button.classList.add("button__change-user", "color-grey-7", "bg-color-grey-transparent", "font-bold-weight");

    divImage.style.backgroundImage = `url(${user.avatar_url})`;
    titleName.innerText = user.name;

    button.innerText = "Trocar de usuário";
    button.disabled = false;
    button.addEventListener("click", ()=>{
        localStorage.clear();
        location.replace("../../")
    })

    header.innerHTML = "";

    divUserContainer.append(divImage, titleName);
    header.append(divUserContainer, button);
}

export function renderRepos(repository){
    const li = document.querySelector(".list");

    const h2 = document.createElement("h2");
    const pDescription = document.createElement("p");
    const button = document.createElement("button");

    li.classList.add("list__repository", "flex", "flex__dir-column");

    h2.classList.add("color-grey-7", "font-3");
    pDescription.classList.add("list__repository__description", "font-4", "font-light-weight");
    button.classList.add("list__repository__button", "flex", "flex__align-center", "flex__justify-center", "bg-color-grey-2", "color-grey-7 font-4");

    h2.innerText = repository.name;
    pDescription.innerText = repository.description;
    button.innerText = "Repositório";
    button.addEventListener("click", ()=>{
        open(repository.url, "_blank");
    })

    li.append(h2, pDescription, button);
}