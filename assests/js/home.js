let signup =document.getElementById('signup');

signup.addEventListener('click',function(event){
    let register=document.getElementById('register');
    
    if(register.elements[2].value!==register.elements[3].value){
        alert("password and confirm password doesnt match");
        
        event.preventDefault();
    }
})
