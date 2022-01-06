// Listeners:
document.getElementById("login-btn").addEventListener("click", iniciarSesion);
document.getElementById("register-btn").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Variables:

let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");
let loginRegisterContainer = document.querySelector(".login-register-container");
let backBoxLogin = document.querySelector(".back-box-login");
let backBoxRegister = document.querySelector(".back-box-register");

// Funciones:

function anchoPage(){

    if (window.innerWidth > 850){
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "block";
    }else{
        backBoxRegister.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.display = "none";
        loginForm.style.display = "block";
        loginRegisterContainer.style.left = "0px";
        registerForm.style.display = "none";   
    }
}

anchoPage();

function iniciarSesion(){
    if (window.innerWidth > 850){
        loginForm.style.display = "block";
        loginRegisterContainer.style.left = "10px";
        registerForm.style.display = "none";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.opacity = "0";
    }else{
        loginForm.style.display = "block";
        loginRegisterContainer.style.left = "0px";
        registerForm.style.display = "none";
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "none";
    }
}

function register(){
    if (window.innerWidth > 850){
        registerForm.style.display = "block";
        loginRegisterContainer.style.left = "410px";
        loginForm.style.display = "none";
        backBoxRegister.style.opacity = "0";
        backBoxLogin.style.opacity = "1";
    }else{
        registerForm.style.display = "block";
        loginRegisterContainer.style.left = "0px";
        loginForm.style.display = "none";
        backBoxRegister.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";
    }
}