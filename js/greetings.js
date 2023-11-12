const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  const date = new Date();
  if (username === "nico" || username === "Nico") {
    greeting.innerText = `Thank you! Teacher Nico!`
  } else if (date.getHours() >= 18) {
    greeting.innerText = `Good evening, ${username}`;
  } else if (date.getHours() >= 12) {
    greeting.innerText = `Good afternoon, ${username}`;
  } else if (date.getHours() >= 6) {
    greeting.innerText = `Good morning, ${username}`;
  } else {
    greeting.innerText = `Good night, ${username}`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}