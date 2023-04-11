const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');
const div = document.getElementById('password-row');

password2.addEventListener('input', checkInput);

function checkInput() {
    
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();
    if(password2Value === passwordValue) {
        div.classList.remove('input-check');                                
    } else {
        div.classList.add('input-check');                                
    }
};



