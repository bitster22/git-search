export function handleNavigation(){
    const backButton = document.querySelector(".button__error");

    backButton.addEventListener("click", ()=>{
        localStorage.clear();
        location.replace("../../");
    })
}

handleNavigation();