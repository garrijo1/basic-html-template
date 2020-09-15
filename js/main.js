window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('signup-form') .addEventListener('submit', validateFormValues);
});


function validateFormValues(event){
    let form = document.getElementById('signup-form');
    let username = form.elements['name'].value;
    let useremail= form.elements['email'].value;
    let userpw = form.elements['password'].value;

    var user = {
        name: username,
        email: useremail,
        password: userpw
    }
    console.log(user);
    event.preventDefault();
}





// var user = {
//     firstname: 'Joe',
//     lastname: 'Garrison',
//     email: 'joe@gmail.com',
//     fullname: function(){
//         return this.firstname+ " " + this.lastname;
//     }

// }