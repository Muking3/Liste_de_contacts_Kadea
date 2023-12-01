
// Tableau d'enregistrement
const array_contact = []
const form = document.querySelector("form")

// Champs PRENOM
const first_name = document.getElementById('first_name')
const message_fn = document.querySelector("#message_fn")
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
    REINIT()
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
        div.innerHTML = `<div class="contact_list_img">
                                <img src="${Source}" alt="photo du contact">
                            </div>
                            <div class="contact_list_text">
                                        <div>
                                            <div class="contact_text">
                                                <p>
                                                <span id='firstName'>${First_Name}</span>
                                                <span id='name'>${Names}</span>
                                                <span id='group'>-${Group}</span></p>
                                                <div>
                                                    <img id="space_between_icon" src="edit icon.svg"
                                                        alt="icone modifier" class="icon_modifie">
                                                    <img src="delete icon.svg"
                                                        alt="icone supprimer">
                                                </div>
                                            </div>
                                            <div>
                                                <p id="paragraph_num_email">${Numbers}-${Email}</p>
                                                <p id="paragraph_bio">${Bio}</p>
                                            </div>
                                        </div>
                            </div>`
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
};

// Change buntton

// document.querySelector('#creer').addEventListener("change", MODIFIER);

// function MODIFIER () {
//     btn_creer.value = modifier.value;
// }


// document.querySelector('#reinit').addEventListener("close", ANNULER);

//   function ANNULER () {
//     reinit.value = annuler.value;
//    }