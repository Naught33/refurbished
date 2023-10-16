console.log('connected');
const light_dark = document.getElementById("light_dark");
let isLight = true;
const body_ = document.body

// Admin variables and constants
const login_area = document.getElementById("login");
const inventory = document.getElementById("inventory");
const login_button = document.getElementById("log_in_button");
const logout_button = document.getElementById("log_out_button");
let isVisibleTracker = false;
let isLoggedIn = false;
console.log(isLoggedIn);

// Check if the user is already logged in (when the page loads)
document.addEventListener('DOMContentLoaded', () => {
    isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        login_area.style.display = "none";
        inventory.style.display = "flex";
        console.log("at reload " + isLoggedIn);
    }else {
        login_area.style.display = "flex"; // Show the login form by default
        inventory.style.display = "none";
        console.log("Default" + isLoggedIn);
    }
});

function renderInventory() {
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;

    if (userName !== "" && passWord !== "") {
        alert("Log in successful");
        login_area.style.display = "none";
        inventory.style.display = "flex";
        isVisibleTracker = true;
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true'); // Store login status
        console.log("Is logged in status: " + isLoggedIn + " Render Success");
    } else {
        alert("Please input credentials");
        console.log("Render Failure");
    }
}

function logout(){
    localStorage.setItem('isLoggedIn', 'false');
    isLoggedIn= false;
    console.log("Is logged in status: " + isLoggedIn + " Render Success");
    console.log("When logout occurs "+ isLoggedIn);
}

login_button.addEventListener('click', (e) => {
    e.preventDefault();
    renderInventory();
});

logout_button.addEventListener('click',(e)=>{
    e.preventDefault();
    logout();
    login_area.style.display = "flex";
    inventory.style.display = "none";

})







function changeTheme (light_or_dark){
    if(light_or_dark){
    body_.style.backgroundColor = "black";
    isLight=false;
    }else{
        body_.style.backgroundColor = "white";
        isLight = true;
    }
}

light_dark.addEventListener('click', ()=>{
    changeTheme(isLight)
})