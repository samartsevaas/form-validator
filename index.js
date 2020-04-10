const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input , message){
    const formControl = input.closest('.form-control');
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.closest('.form-control');
    formControl.classList.remove('error');
    formControl.classList.add('success');
    const small = formControl.querySelector('small');
    small.innerText = '';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    if(username.value === ''){
        showError(username, 'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    }else if(!validateEmail(email.value)){
        showError(email, 'Email is not valid');
    }else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Password is similar');
    }else{
        showSuccess(password2);
    }
})