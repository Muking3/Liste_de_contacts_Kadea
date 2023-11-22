let names =  document.getElementById('names');
let groupe = document.getElementById('groupe');
// let mail = document.getElementById('message_em')

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
     
      let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      email.test(email);
   }
   function valider() {
      let message_em = $("#message_em").value();
      let result = $('#result');
      
      message_em.text('');
      result.text('');

      if (validateEmail(email)) {

         result.text( email + 'adresse valide !');
         result.css('color', 'blue');
         
      }
      else {
         result.text( email + 'adresse invalide');
         result.css('color', 'red');
      }
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

