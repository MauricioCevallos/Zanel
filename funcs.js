
function sign_in(){
    let username = document.getElementById("user_name").innerHTML;
    sessionStorage.setItem("user_name", username);
    console.log("username saved");
    window.location.href = "home.html"
}

function getItem(){
    window.location.href = "buying.html"
}