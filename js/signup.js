const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.stopPropagation()
    event.preventDefault()

   const  fullname = event.currentTarget.fullname.value;
    console.log(fullname)
    const email = event.currentTarget.email.value;
    console.log(email)
     
    const pass = event.currentTarget.password.value;
    console.log(pass)

    const date = event.currentTarget.date.value;
    console.log(date)

    const sex = event.currentTarget.sex.value;
    console.log(sex)

    const number = event.currentTarget.phonenumber.value;
    console.log(number)

    const country = event.currentTarget.country.value;
    console.log(country)

    const check = event.currentTarget.checkbox.checked;
    console.log(check)
});