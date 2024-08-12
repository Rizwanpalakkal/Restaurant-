const login = () =>{
    const username = usernameInput.value
    const password = pswdInput.value
    if(username && password){
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        window.location = "food.html"
    }else{
        alert("Please fill the form completely")
    }
}

if(localStorage.getItem("username")){
displayUser.innerHTML = localStorage.getItem("username")
}
const logout = () =>{
    localStorage.clear()
    window.location = "index.html"
}