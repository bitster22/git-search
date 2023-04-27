const saveLocal = () =>{
    const text = document.querySelector(".search-user__input");
    const button = document.querySelector("#search-profile");

    button.addEventListener("click", ()=>{
        localStorage.setItem("teste", text.value);

        console.log(localStorage.getItem("teste"));
    })
}

saveLocal();