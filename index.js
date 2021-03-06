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

function checkRequested(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`);
            console.log(input);
        }else if(!validateEmail(email.value) && input.id == 'email'){
            showError(email, `${email.id} is not valid`);
        }else{
            showSuccess(input);
        }
    })
    function checkPassword(){
        if(password.value !== password2.value){
            showError(password, `${password.id} is not = ${password2.id}`);
            showError(password2, `${password2.id} is not = ${password.id}`);
        }else{
            showSuccess(password);
            showSuccess(password2);
        }
    }

    function validatePasswordlenght(){
        const passValid = password.value;
        if(passValid.length < 8){
            showError(password, `${password.id} can be more than 8 characters`);
            showError(password2, ``);
        }else{
            showSuccess(input);
        }
   
    }
    checkPassword();
    validatePasswordlenght();
}



form.addEventListener('submit', function(event){
    event.preventDefault();
    
   checkRequested([username,email,password,password2]);
})
