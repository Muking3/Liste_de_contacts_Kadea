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





