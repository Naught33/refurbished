console.log('connected');
const light_dark = document.getElementById("light_dark");
let isLight = true;
const body_ = document.body


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