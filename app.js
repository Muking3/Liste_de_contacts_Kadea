
// Tableau d'enregistrement
const array_contact = []
const form = document.querySelector("form")

// Champs PRENOM
const first_name = document.getElementById("first_name")
const message_fn = document.getElementById("message_fn")
first_name.addEventListener("blur", FIRSTNAME)
function FIRSTNAME() {
    let valuef_n = first_name.value.trim()
    if (valuef_n.length < 3 || valuef_n.length > 50) {
        first_name.style.border = "2px solid red"
        first_name.style.borderRadius = "5px"
        if (valuef_n.length < 3) {
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
        return true
    }
}

//Champs NOM
let names = document.getElementById('names')
names.addEventListener('blur', NAME)
function NAME() {
    let message_n = document.getElementById('message_n')
    if (names.value.length < 3) {
        message_n.innerText = "Nombre de caractere insuffisant, ne doit pas etre inférieur à 3"
        names.style.border = '2px solid red'
        names.style.borderRadius = '5px'
    }
    else if (names.value.length > 50) {
        message_n.innerText = 'Le nombre de caractères ne doit pas aller au-dèla de 50'
        names.style.border = '2px solid red'
        names.style.borderRadius = '5px'
    }

const names = document.getElementById('names')
const message_n = document.querySelector("#message_n")
names.addEventListener('blur', NAME)
function NAME() {
    let valuef_n = names.value.trim()
    if (valuef_n.length < 3) {
        message_n.innerText = "Nombre de caractere insuffisant, ne doit pas etre inférieur à 3"
        names.style.border = '2px solid red'
        names.style.borderRadius = '5px'
    }
    else if (valuef_n.length > 50) {
        message_n.innerText = 'Le nombre de caractères ne doit pas aller au-dèla de 50'
        names.style.border = '2px solid red'
        names.style.borderRadius = '5px'
    }
    else {
        message_n.innerText = ''
        names.style.border = ''
        names.style.borderRadius = ''
        return true
    }
}

//Champs GROUP
let group = document.getElementById('group')

//Champs GROUPE
const group = document.getElementById('group')
let message_g = document.getElementById('message_g')
group.addEventListener('blur', GROUP)
function GROUP() {
    if (group.value.length >= 10) {
        message_g.innerText = "Le nombre de caractère ne peut pas depasser 10"
        group.style.border = "2px solid red"
        group.style.borderRadius = "5px"
    }
    else {
        message_g.innerText = ''
        group.style.border = ''
        group.style.bordeRaduis = ''
        return true
    }
}
// Champ E-MAIL
let email = document.querySelector('#email')
let message_em = document.querySelector('#message_em')
let mailExistant = []
email.addEventListener('blur', EMAIL)
function EMAIL() {
    let Regex = /^[A-Za-z0-9\.]+@[A-Za-z0-9]+(\.)[A-Za-z0-9]{2,}$/
    let b_mail = Regex.test(email.value)
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
        return true
    }
};

//Champs BiO
const bio = document.querySelector('#text_bio')
let message_bio = document.getElementById('message_bio')
bio.addEventListener('input', BIO)
function BIO() {
    if (bio.value.length < 10) {
        bio.style.border = '2px solid red'
        bio.style.borderRadius = "5px"
        message_bio.innerText = 'Erreur, nombre de caractères inferieur à 10'
    }
    else if (bio.value.length > 150) {
        let message_bio = document.getElementById('message_bio')
        bio.style.border = '2px solid red'
        bio.style.borderRadius = "5px"
        message_bio.innerText = 'Erreur, nombre de caractères superieur à 150'
    }
    else {
        bio.style.border = ''
        message_bio.innerText = ''
        return true
    }
}

// Champs IMAGE
const drop_image = document.querySelector("#drop_image")
const input_img = document.querySelector("#input_img")
const message_img = document.querySelector("#message_img")
const instruction_img = document.querySelector("#instruction_img")
const photo_contact = document.querySelector("#photo_contact")
let source = ""
let validation_img = ""
drop_image.addEventListener("dragover", (event) => {
    event.preventDefault()
    drop_image.style.border = "2px solid #0880D6"
    drop_image.style.borderRadius = "5px"
    instruction_img.hidden = true
})
drop_image.addEventListener("dragleave", () => {
    drop_image.style.border = ""
    instruction_img.hidden = false
})
input_img.addEventListener("change", () => {
    let imgs = input_img.files[0]
    console.log(input_img.files[0]);
    PHOTO(imgs)
})

function PHOTO(file) {
    let fileType = file.type
    console.log(file.size)
    let tableRegex = /png$|jpe?g$/
    if (!tableRegex.test(fileType)) {
        console.log(fileType)
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
        message_img.innerText = "Format de l'image invalide"
    }
    else if (file.size > 5242880) {
        console.log(fileType)
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
        message_img.innerText = "Taille de l'image depasse 5Mo"
    }
    else {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            let fileSource = reader.result
            console.log(fileSource);
            instruction_img.hidden = true
            photo_contact.src = fileSource
            photo_contact.alt = "image du contact"
            photo_contact.hidden = false
            message_img.innerText = ""
            drop_image.style.border = ""
            validation_img = true
            source = fileSource
            return true
        }
    }
}

// Envoie du formulaire
form.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
    }
})
form.addEventListener("submit", function (e) {
    e.preventDefault()
    OBJECT_FORM()
})

// Creation d'un object a partir du formulaire
function OBJECT_FORM() {
    let data = new FormData(form)
    const objet_contacts = Object.fromEntries(data)
    console.log(objet_contacts);

    // Creation variable du formulaire
    const First_Name = objet_contacts.First_Name
    const Names = objet_contacts.Names
    const Numbers = objet_contacts.Numbers
    const Group = objet_contacts.Group
    const Email = objet_contacts.Email
    const Bio = objet_contacts.Bio
    objet_contacts.Source = source
    const Source = objet_contacts.Source
    VALIDATION_img(objet_contacts, First_Name, Names, Numbers, Group, Email, Bio, Source)
}

// NUMBERS

let numbers = document.querySelector('#numbers');
numbers.addEventListener('blur', NUMBERS);
let numberssExistants = [];
function NUMBERS() {
    let numbers = this.value;
    let message_num = document.getElementById('message_num');
    let prefixes = ['084', '085', '080', '089', 'O81', '082', '099', '097', '090'];
    //Caractères
    if (isNaN(numbers)) {
        this.style.border = '2px solid red';
        this.style.borderRadius = "5px";
        message_num.innerHTML = 'le numero de téléphone ne contient que des chiffres';
    }
     //Taille
    else if (this.value.length < 10 || this.value.length > 10) {
        this.style.border = '2px solid red';
        this.style.borderRadius = "5px";
        message_num.innerText = 'Erreur, renseigner un numéro de téléphone avec 10 chiffres ';
    }
    // Vérification du préfixe du numéro
    else if (!prefixes.some(prefix => numbers.startsWith(prefix))) {
        this.style.border = "1px solid red";
        this.style.borderRadius = "5px";
        message_num.innerHTML = "renseigner un numéro de téléphone au format valide";
    }
    // Vérification de l'existence du numéro
    else if (numberssExistants.includes(numbers)) {
        this.style.border = "1px solid red";
        this.style.borderRadius = "5px";
        message_num.innerHTML = "Le numéro existe déjà.";
    }//validation
    else {
        this.style.border = ""
        message_num.innerHTML = ""
    }
}

// Validation_img du formulaire (Liste des contacts)
function VALIDATION_img(objet_contacts, First_Name, Names, Numbers, Group, Email, Bio, Source) {
    if (Source.length == 0) {
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
        message_img.innerText = "Inserer une image"
    }
    else if (FIRSTNAME() && NAME() && GROUP() && BIO() && EMAIL() && validation_img) {
        array_contact.push(objet_contacts)
        console.log(array_contact);
        const contact_box_list = document.querySelector(".contact_box_list")
        const div = document.createElement("div")
        contact_box_list.appendChild(div)
        div.classList.add("contact_list")
        const div_list_img = document.createElement("div")
        div.appendChild(div_list_img)
        div_list_img.classList.add("contact_list_img")
        const img_contact = document.createElement("img")
        div_list_img.appendChild(img_contact)
        img_contact.src = Source
        img_contact.alt = "photo du contact"
        const div_list_text = document.createElement("div")
        div.appendChild(div_list_text)
        div_list_text.classList.add("contact_list_text")
        const div_text = document.createElement("div")
        div_list_text.appendChild(div_text)
        const div_text_part = document.createElement("div")
        div_text.appendChild(div_text_part)
        div_text_part.classList.add("contact_text")
        const p1 = document.createElement("p")
        div_text_part.appendChild(p1)
        p1.innerText = `${First_Name} ${Names}-${Group}`
        const div_part1 = document.createElement("div")
        div_text_part.appendChild(div_part1)
        const icone_edit = document.createElement("img")
        div_part1.appendChild(icone_edit)
        icone_edit.id = "space_between_icon"
        icone_edit.src = "edit icon.svg"
        icone_edit.alt = "icone modifier"
        const icone_delete = document.createElement("img")
        div_part1.appendChild(icone_delete)
        icone_delete.src = "delete icon.svg"
        icone_delete.alt = "icone supprimer"
        const div_part2 = document.createElement("div")
        div_text.appendChild(div_part2)
        const p2 = document.createElement("p")
        div_part2.appendChild(p2)
        p2.id = "paragraph_num_email"
        p2.innerText = `${Numbers}-${Email}`
        const p3 = document.createElement("p")
        div_part2.appendChild(p3)
        p3.id = "paragraph_bio"
        p3.innerText = `${Bio}`
        reinit.click()
        DELET(icone_delete, contact_box_list, div)
    }
}

// Reinitialisation de formulaire.
let reinit = document.querySelector('#reinit');
reinit.addEventListener('click', REINIT)
function REINIT() {
    first_name.value = '';
    names.value = '';
    numbers.value = '';
    group.value = '';
    email.value = '';
    bio.value = '';
    first_name.style.border = '';
    first_name.style.borderRadius = '';
    message_fn.innerText = '';
    message_n.innerText = '';
    names.style.border = '';
    message_em.innerText = '';
    email.style.border = '';
    message_g.innerText = '';
    group.style.border = '';
    bio.style.border = '';
    message_bio.innerText = '';
    instruction_img.hidden = false
    photo_contact.hidden = true
};

function DELET(icone_delete, contact_box_list, div) {
    icone_delete.addEventListener("click", function () {
        if (confirm("Etes-vous sûr de vouloir supprimer") == true) {
            contact_box_list.removeChild(((div)))
        }
    })
}

