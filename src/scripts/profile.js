const getLocal = () =>{
    const button = document.querySelector(".button__change-user");

    button.addEventListener("click", ()=>{
        console.log(localStorage.getItem("teste"));
    })
}

getLocal();