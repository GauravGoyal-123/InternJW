const login_icon = document.getElementById('login-icon');
const sign_up_form = document.getElementById('signup-form')
const register_btn = document.getElementById('register-btn-back'); 
const login_form = document.getElementById('login-form');
const login_page = document.getElementById('login');
const login_text = document.getElementById('exampleModalLongTitle');
const toogle1 = document.getElementById('toggle-form1');
const toogle2 = document.getElementById('toggle-form2');
const login_btn_back = document.getElementById('login-btn-back');
const login_btn = document.getElementById('login-btn');

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

function getCookie(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + '=')) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null;
}

// this function fetching the data from an api on login time. purpose : to replace the login option to user icon
let loggedIn = false;
function getCookieValue(cookieName) {
    window.cookieStore.get(cookieName)
    .then( result => {
        if(result.value) loggedIn = true;
    })
}
// function fetchData() {
//     const apiUrl = 'https://localhost:3000/user/login';
//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('API Response:', data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

login_btn_back.addEventListener('click', ()=> {
    document.getElementById('email').innerHTML = "";
    document.getElementById('password').innerHTML = "";
    toogle1.style.display = "block";
    toogle2.style.display = "none";
    login_form.style.display = "block";
    sign_up_form.style.display = "none";
    login_text.innerHTML = "Login to Continue";

    const tokenValue = getCookie('token');
    if (tokenValue) {
        console.log('Token value:', tokenValue);
    } else {
        console.log('Token not found or expired.');
    }
    getCookieValue("token");
    // fetchData();
    if(loggedIn) {
        console.log("loggedIn successfully");
    }
})

login_btn.addEventListener('click', ()=> {
    debugger
    const tokenValue = getCookie('token');
    if (tokenValue) {
        console.log('Token value:', tokenValue);
    } else {
        console.log('Token not found or expired.');
    }
    getCookieValue("token");
    // fetchData();
    if(loggedIn) {
        console.log("loggedIn successfully");
    }
    else {
        console.log("something then worng");
    }
})
  