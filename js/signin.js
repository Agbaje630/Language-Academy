const form = document.querySelector('form')
console.log(form);


form.addEventListener('submit', function(event){
    event.stopPropagation()
    event.preventDefault()
    const email = event.currentTarget.email.value;
    console.log(email)
    const password = event.currentTarget.password.value;
    console.log(password)

});
