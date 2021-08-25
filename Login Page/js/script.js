
// Form Animation messages

        // show password option

//         $(".toggle-password").click(function() {

//         $(this).toggleClass("fa-eye fa-eye-slash");
//         var input = $($(this).attr("toggle"));
        
//     if (input.attr("type") == "password") {
          
//             input.attr("type", "text");
//   }   
//     else {
  
//     input.attr("type", "password");
// }
// });


// tooltip for inputs and button fields

$(document).ready(function(){    
 
 $("#uName").tooltip({
 
          track:true,
          content: "Your Username contain alphabet, numbers, underscore, dot",
          show: {effect: "highlight", duration: "4000"},
          hide: {effect: "explode", duration: "4000"}
 
         });
 
 $("#pwd").tooltip({
 
          track:true,
          content: "Your Password length must be greater than 7",
          show: {effect: "highlight", duration: "5000"},
          hide: {effect: "explode",   duration: "4000"}
 
         });
 
 $("#btn").tooltip({
 
          track:true,
          content: "submit the form after filling",
          show: {effect: "highlight", duration: "4000"},
          hide: {effect: "explode",   duration: "4000"}
 
         });
        });     




// Form validation

function Validation(){

var userName = document.getElementById('uName').value;
var password = document.getElementById('pwd').value; 
var error_message = document.getElementById('error_message');

        var text;
        error_message.style.padding = "12px";

        
        //  var Regx = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z 0-9 _]+).([a-z]{2,20})([.a-z]{2,10})$/;
         var Regx = /aishajaved@uetpeshawar.edu.pk/;
        
         if(userName == "" || password == ""){

            text = "Empty Input is not valid";
             error_message.innerHTML = text;
            return false;
        }

          if (Regx.test(userName) == false){ 
           
              text = "Please Enter Valid Email";
              error_message.innerHTML = text;
            return false;
        }

        if(password.length < 7){

             text = "Invalid Password";
             error_message.innerHTML = text;
            return false;
        }

        

        // alert("Your form Is submitted Successfully!");
        return true;
    }

    
    
    // function showPwd(myPass, el) {
    //     let x = document.getElementById('myPass');
    //     if (x.type === "password") {
    //       x.type = "text";
    //       el.className = 'fa fa-eye-slash showpwd';
    //     } else {
    //       x.type = "password";
    //       el.className = 'fa fa-eye showpwd';
    //     }
    //   }



    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });