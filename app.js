const array_contact = []
const objet_contacts = {
    names: document.getElementById('names'),
    group: document.getElementById('group'),
}
names.addEventListener('blur',function () {
    let message_n = document.getElementById('message_n')
    if (names.value.length < 3 ) {
      message_n.innerText="Nombre de caractere insuffisant, ne doit pas etre inférieur à 3";
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

  //champ group

group.addEventListener('blur',function () {
    let message_g = document.getElementById('message_g')
    if (group.value.length >= 10) {
        message_g.innerText = "Le nombre de caractère ne peut pas depasser 10";
        group.style.border = "2px solid red"
        group.style.borderRadius = "5px"
    }
    else {
        message_g.innerText = '';
        group.style.border = '';
        group.style.bordeRaduis = '';
    }       
});

