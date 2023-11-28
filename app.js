const array_contact = [];
const objet_contacts = {};

// Champs PRENOM
let first_name = document.querySelector('#first_name');
const message_fn = document.querySelector('#message_fn');
first_name.addEventListener('blur', FIRSTNAME);
function FIRSTNAME() {
  if (first_name.value.length < 3 || first_name.value.length > 50) {
    first_name.style.border = '2px solid red';
    first_name.style.borderRadius = '5px';
    if (first_name.value.length < 3) {
      message_fn.innerText =
        'Nombre de caractére insuffisant, entrez plus de 2 caracteres';
    } else {
      message_fn.innerText =
        'Nombre de caractére execessif, entrez moins de 50 caracteres';
    }
  } else {
    first_name.style.border = '';
    first_name.style.borderRadius = '';
    message_fn.innerText = '';
  }
}

//Champs NOM
let names = document.getElementById('names');
names.addEventListener('blur', NAME);
function NAME() {
  let message_n = document.getElementById('message_n');
  if (names.value.length < 3) {
    message_n.innerText =
      'Nombre de caractere insuffisant, ne doit pas etre inférieur à 3';
    names.style.border = '2px solid red';
    names.style.borderRadius = '5px';
  } else if (names.value.length > 50) {
    message_n.innerText =
      'Le nombre de caractères ne doit pas aller au-dèla de 50';
    names.style.border = '2px solid red';
    names.style.borderRadius = '5px';
  } else {
    message_n.innerText = '';
    names.style.border = '';
    names.style.borderRadius = '';
  }
}

//Champs GROUP
let group = document.getElementById('group');
group.addEventListener('blur', GROUP);
function GROUP() {
  let message_g = document.getElementById('message_g');
  if (group.value.length >= 10) {
    message_g.innerText = 'Le nombre de caractère ne peut pas depasser 10';
    group.style.border = '2px solid red';
    group.style.borderRadius = '5px';
  } else {
    message_g.innerText = '';
    group.style.border = '';
    group.style.bordeRaduis = '';
  }
}
// validation d' e-mail

let email = document.querySelector('#email');
let mailExistant = [];
email.addEventListener('blur', function () {
  let message_em = document.querySelector('#message_em');
  let Regex = /^[A-Za-z0-9\.]+@[A-Za-z0-9]+(\.)[A-Za-z0-9]{2,}$/;
  let b_mail = Regex.test(email.value);
  // if (b_mail) {
  //     message_em.innerText = 'Adresse valide!';
  //     message_em.style.color='rgb(71, 141, 71);'
  //     email.style.border = '2px solid green'
  //     email.style.bordeRaduis='5px'
  // }

  if (!b_mail) {
    message_em.innerText = 'Adresse invalide!';
    message_em.style.color = 'red';
    email.style.border = '2px solid red';
    email.style.borderRadius = '5px';
  } 
  else if (mailExistant.includes(email.value)) {
    email.style.border = '2px solid red';
    email.style.borderRadius = '5px';
    message_em.innerText = 'Adresse déjà existante';
  } 
  else {
    message_em.innerText = '';
    email.style.border = '';
    email.style.borderRadius = '';
  }
});
//Champs BiO
let bio = document.querySelector('#text_bio');
bio.addEventListener('input', BIO);
function BIO() {
  if (this.value.length < 10) {
    let message_bio = document.getElementById('message_bio');
    this.style.border = '2px solid red';
    this.style.borderRadius = '5px';
    message_bio.innerText = 'Erreur, nombre de caractères inferieur à 10';
  } else if (this.value.length > 150) {
    let message_bio = document.getElementById('message_bio');
    this.style.border = '2px solid red';
    this.style.borderRadius = '5px';
    message_bio.innerText = 'Erreur, nombre de caractères superieur à 150';
  } else {
    this.style.border = '';
    message_bio.innerText = '';
  }
}

// Reinitialisation de formulaire.
let reinit = document.querySelector('#reinit');
reinit.addEventListener('click', function () {
  first_name.value = '';
  names.value = '';
  Number.value = '';
  group.value = '';
  email.value = '';
  bio.value = '';

  reinit.style.borderRadius = 'none';
});

function changeCouleur() {
  reset.style.backgroundColor = 'green';
}
reset.addEventListener('mousedown', change);
function change() {
  reset.style.backgroundColor = '';
}
// Annulation & Suppression

function confirm() {
  let Suppression = confirme('Etes-vous sùr de vouloir supprimer?');
}
