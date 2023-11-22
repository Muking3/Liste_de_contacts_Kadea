let names =  document.getElementById('names');
let groupe = document.getElementById('groupe');
let b_mail = document.getElementById('b_mail')


names.addEventListener('blur',function () {
    let message_n = document.getElementById('message_n')
    if (names.value.length < 3 ) {
      message_n.innerText="Nombre de caractere insuffisant, veillez saisir un nom valable";
      names.style.border = '2px solid red'
      names.style.borderRadius = '5px'
    }
     else if (names.value.length > 50) {
        message_n.innerText='Le nombre de caractères ne doit pas aller au-dèla de 50';
        names.style.border = '2px solid red'
        names.style.borderRadius = '5px'
     } 
     else {
        message_n.innerText='';
        names.style.border = ''
        names.style.borderRadius = ''
        
    }

  });

  let message_n = document.getElementById('text_g')
  groupe.addEventListener('blur',function () {
    if (groupe.value.length >= 10) {
        text_g.innerText='Le nombre de caractere ne peut pas depasser 10';
        groupe.style.border = '2px solid red'
        groupe.style.borderRadius = '5px'
     } 
     else {
        text_g.innerText='';
        groupe.style.border = ''
        groupe.style.borderRadius = ''
    }
        
   });

   // validation d'email

   function validateEmail(email) {
     
      let email = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
      
      email.test(email);
   }

   if (valider) {
      return true
   } else {
      return false
   }

   if (validateEmail('testemail'
   )){

      document.querySelector('#message_mail').innerText="";

      
   } else{
      document.querySelector('#message_mail').innerText="";

   }

  







// let  = document.querySelector("names")
// console.log(names.value);
// console.log(names.value.length);

// names.onblur
//   names.addEventListener('blur',function () {

//     if (names.value.length > 50) {
//         let message_n = document.getElementById('message_n')
//         message_n.innerText='le nombre de caractères ne doit pas aller au-dèla de 50';
        
//     }  
//      else {
//         message_n.innerText='';
//     }
// });   
  
  
  
  // names.setAttribute('placeholder','veillez saisir un nom valable');

