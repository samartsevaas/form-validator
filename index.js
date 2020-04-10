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

function checkRequared(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() ===''){
            showError(input, `${input.id} is not require`);
        }else if(!validateEmail(email.value)){
            showError(email,`${input.id} is not valid`);
        }
        else{
            showSuccess(input);
        }
    });
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    checkRequared([username,email,password,password2]);
})