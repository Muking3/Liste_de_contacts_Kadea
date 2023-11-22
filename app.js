const array_contact = []
const objet_contacts = {

}

//Champs BiO

let bio = document.querySelector('#text_bio');
bio.addEventListener('input', BIO)
function BIO() {
    if (this.value.length < 10) {
        let message_bio = document.getElementById('message_bio')
        this.style.border = '2px solid red';
        this.style.borderRadius = "5px";
        message_bio.innerText = 'Erreur, nombre de caractères inferieur à 10';
    } else if (this.value.length > 150) {
        let message_bio = document.getElementById('message_bio')
        this.style.border = '2px solid red';
        this.style.borderRadius = "5px";
        message_bio.innerText = 'Erreur, nombre de caractères superieur à 150';
    } else {
        this.style.border = '';
        message_bio.innerText = '';
    }
};




// champ nom
let names = document.getElementById('names')
names.addEventListener('blur',NAME)
function NAME() {
    let message_n = document.getElementById('message_n')
    if (names.value.length < 3 ) {
      message_n.innerText="Nombre de caractere insuffisant, ne doit pas etre inférieur à 3"
      names.style.border = '2px solid red'
      names.style.borderRadius = '5px'
    }
     else if (names.value.length > 50) {
        message_n.innerText='Le nombre de caractères ne doit pas aller au-dèla de 50'
        names.style.border = '2px solid red'
        names.style.borderRadius = '5px'
     } 
     else {
        message_n.innerText=''
        names.style.border = ''
        names.style.borderRadius = ''
    }
};

//champ group
let group = document.getElementById('group')
group.addEventListener('blur',GROUP)
function GROUP() {
    let message_g = document.getElementById('message_g')
    if (group.value.length >= 10) {
        message_g.innerText = "Le nombre de caractère ne peut pas depasser 10"
        group.style.border = "2px solid red"
        group.style.borderRadius = "5px"
    }
    else {
        message_g.innerText = ''
        group.style.border = ''
        group.style.bordeRaduis = ''
    }       
}

