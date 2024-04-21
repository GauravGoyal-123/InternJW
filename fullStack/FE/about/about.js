const login_icon = document.getElementById('login-icon');
const sign_up_form = document.getElementById('signup-form')
const register_btn = document.getElementById('register-btn-back'); 
const login_form = document.getElementById('login-form');
const login_page = document.getElementById('login');
const login_text = document.getElementById('exampleModalLongTitle');
const toogle1 = document.getElementById('toggle-form1');
const toogle2 = document.getElementById('toggle-form2');

login_icon.addEventListener('click', ()=> {
    toogle1.style.display = "block";
    toogle2.style.display = "none";
    sign_up_form.style.display = "none";
    login_text.innerHTML = "Login to Continue";
})

register_btn.addEventListener('click', ()=> {
    toogle1.style.display = "none";
    toogle2.style.display = "block";
    login_text.innerHTML = "SignUp to Continue";
    sign_up_form.style.display = "block";
    login_form.style.display = "none";

})

const login_btn = document.getElementById('login-btn-back');
login_btn.addEventListener('click', ()=> {
    toogle1.style.display = "block";
    toogle2.style.display = "none";
    login_form.style.display = "block";
    sign_up_form.style.display = "none";
    login_text.innerHTML = "Login to Continue";
})

