const array_contact = []
const objet_contacts = {

}

// Champs PRENOM
let first_name = document.querySelector("#first_name")
const message_fn = document.querySelector("#message_fn")
first_name.addEventListener("blur", FIRSTNAME)
function FIRSTNAME() {
    if (first_name.value.length < 3 || first_name.value.length > 50) {
        first_name.style.border = "2px solid red"
        first_name.style.borderRadius = "5px"
        if (first_name.value.length < 3) {
            message_fn.innerText = "Nombre de caractére insuffisant, entrez plus de 2 caracteres"
        }
        else {
            message_fn.innerText = "Nombre de caractére execessif, entrez moins de 50 caracteres"
        }
    }
    else {
        first_name.style.border = ""
        first_name.style.borderRadius = ""
        message_fn.innerText = ""
    }
}

//Champs NOM
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
}

//Champs GROUP
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
// validation d' e-mail

let mes_em = document.querySelector('#email')
let mailExistant = ["patricknzita25@gmail.com"]
mes_em.addEventListener('blur',function() {
    let message_em= document.querySelector('#message_em')
    let expression=/^[A-Za-z0-9.]+@[A-Za-z0-9]+(\.)[A-Za-z0-9]{2,}$/
    let b_mail = expression.test(mes_em.value)
    // if (b_mail) {
    //     message_em.innerText = 'Adresse valide!';
    //     message_em.style.color='rgb(71, 141, 71);'
    //     mes_em.style.border = '2px solid green'
    //     mes_em.style.bordeRaduis='5px'
    // } 

    if (!b_mail) {
        message_em.innerText = 'Adresse invalide!';
        message_em.style.color='red'
        mes_em.style.border = '2px solid red'
        mes_em.style.borderRadius='5px'
    }
    
    else if (mailExistant.includes(mes_em.value)) {
        mes_em.style.border = '2px solid red';
        mes_em.style.borderRadius= '5px';
        message_em.innerText = 'Adresse déjà existante';
    
    }
    else {
        message_em.innerText=''
        mes_em.style.border = ''
        mes_em.style.borderRadius=''
    }
    
})
//Champs BiO
let bio = document.querySelector('#text_bio')
bio.addEventListener('input', BIO)
function BIO() {
    if (this.value.length < 10) {
        let message_bio = document.getElementById('message_bio')
        this.style.border = '2px solid red'
        this.style.borderRadius = "5px"
        message_bio.innerText = 'Erreur, nombre de caractères inferieur à 10'
    } else if (this.value.length > 150) {
        let message_bio = document.getElementById('message_bio')
        this.style.border = '2px solid red'
        this.style.borderRadius = "5px"
        message_bio.innerText = 'Erreur, nombre de caractères superieur à 150'
    } else {
        this.style.border = ''
        message_bio.innerText = ''
    }
}

// Reinitialisation de formulaire.
let reset = document.getElementById('reset')
reset.addEventListener('click', function() {
    let Reinit = document.getElementById('Reinit')
    Reinit.addEventListener('click', Reinit)
    Reinit.addEventListener('mouseover', changeCouleur);
})

// reset.addEventListener('mouseover', changeCouleur);
// reset.addEventListener('mouseover', function(){this.style.fontWeight ='bold'});
// reset.getElementById('onclick', reset)


// function () {
//     if (condition) {
        
//     }
    
// }