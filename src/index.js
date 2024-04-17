import './style.css';


const email = document.querySelector('#email');


const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

email.addEventListener('input', (event) => {
    if (emailRegEx.test(email.value)) {
        console.log('Yahooooooo');
        email.setCustomValidity('');
    } 
    else {
        email.setCustomValidity('TO ses posral');
        email.reportValidity();
        console.log(`D'Oh!`);
    }
})
