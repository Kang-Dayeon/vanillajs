const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintGreeting()
}

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + saveUsername +" 👋";
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    paintGreeting();
}