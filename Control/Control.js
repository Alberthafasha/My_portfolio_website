
// Nav bar
var navLinks = document.getElementById("navLinks")

function showMenu(){
navLinks.style.right = "0";

}
function hideMenu(){
navLinks.style.right = "-200px";
}

// Contact form

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && name.length < 7){
        nameError.innerHTML = "Two names required"
        return false
    }
    if(name.length >= 7){
        nameError.innerHTML = '<i class="fa fa-check-circle" ></i>'
        return true
    }
    
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    
    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required"
        return false
    }
    
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone is required"
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone is required'
        return false
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle" ></i>'
    return true
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        return false
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = 'invalid email'
        return false
    }
    emailError.innerHTML = '<i class="fa fa-check-circle" ></i>'
    return true
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false; 
    }
    messageError.innerHTML = '<i class="fa fa-check-circle" ></i>'
    return true

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = "Please, fulfil the above first";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false
    }

}






























// const name = decument.getElementById("name");
// const password = decument.getElementById("password");
// const form = document.getElementById("form")
// const errorElement = document.getElementById("Error")

// form.addEventListener('submit', (e)=>{
//     let messages = [];
//     if(name.value === '' || name.value == null){
//         messages.push("Name is required")
//     }

//     if(messages.length > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
    
// })



// function validForm(){
//     // alert("No")

//     var name = document.custom-form.name;
//     var email = document.custom-form.email;
//     var phone = document.custom-form.phone;
//     var subject = document.custom-form.subject;
//     var message = document.custom-form.message;


//     if(valueof(name) == ""){
//         name.nextElementSibling.style.display = "block";
//         name.style.border = "1px solid #f00"
//         return false
//     }else{
//         name.nextElementSibling.style.display = "none";
//         name.style.border = "1px solid transparent"
//     }

// }