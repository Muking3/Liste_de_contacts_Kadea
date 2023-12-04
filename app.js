const array_contact = []
const form = document.querySelector("form")
const first_name = document.getElementById("first_name")
const message_fn = document.getElementById("message_fn")
const names = document.getElementById("names")
const message_n = document.getElementById("message_n")
const numbers = document.getElementById("numbers")
const message_num = document.getElementById("message_num")
const group = document.getElementById('group')
const message_g = document.getElementById('message_g')
const rt = document.querySelector("#rt")
const modifier = document.querySelector("#modifier")
modifier.style.display = "none"
const submit = document.querySelector("#submit")

first_name.addEventListener("blur", function () {
    INDENTITY(first_name, message_fn)
})
names.addEventListener("blur", function () {
    INDENTITY(names, message_n)
})
group.addEventListener("blur", function () {
    GROUP(group, message_g)
})

function INPUT_STYLE(input) {
    input.style.border = "2px solid red"
    input.style.borderRadius = "5px"
}
function INIT(input, message) {
    input.style.border = ""
    input.style.borderRadius = ""
    message.innerText = ""
}

function INDENTITY(input, message) {
    let value_id = input.value.trim()
    if (value_id.length < 3) {
        INPUT_STYLE(input)
        message.innerText = "Nombre de caractere insuffisant, ne doit pas etre en-deçà de 3 caracteres"
    }
    else if (value_id.length > 50) {
        INPUT_STYLE(input)
        message.innerText = "Nombre de caractere execessif, ne doit pas etre au-dèla de 50 caracteres"
    }
    else {
        INIT(input, message)
        return true
    }
}

// NUMBERS

numbers.addEventListener('blur', NUMBERS);
function NUMBERS() {
    let prefixes = ['084', '085', '080', '089', 'O81', '082', '099', '097', '090'];
    //Caractères
    if (isNaN(numbers.value)) {
        numbers.style.border = '2px solid red';
        numbers.style.borderRadius = "5px";
        message_num.innerHTML = 'le numero de téléphone ne contient que des chiffres';
    }
    //Taille
    if (numbers.value.length !== 10) {
        numbers.style.border = '2px solid red';
        numbers.style.borderRadius = "5px";
        message_num.innerText = 'Erreur, renseigner un numéro de téléphone avec 10 chiffres ';
    }
    // Vérification du préfixe du numéro
    else if (!prefixes.some(prefix => numbers.value.startsWith(prefix))) {
        numbers.style.border = "2px solid red";
        numbers.style.borderRadius = "5px";
        message_num.innerHTML = "renseigner un numéro de téléphone au format valide";
    }
    // Vérification de l'existence du numéro
    else if (array_contact.some(obj => obj.Numbers === numbers.value)) {
        numbers.style.border = "2px solid red";
        numbers.style.borderRadius = "5px";
        message_num.innerHTML = "Le numéro existe déjà.";
    }//validation
    else {
        numbers.style.border = ""
        numbers.style.borderRadius = "";
        message_num.innerHTML = "";
        return true
    }
}


function GROUP(input, message) {
    let value_id = input.value.trim()
    if (value_id.length >= 10) {
        INPUT_STYLE(input)
        message.innerText = "Nombre de caractere execessif, ne doit pas etre au-dèla de 10 caracteres"
    }
    else {
        INIT(input, message)
        return true
    }
}

// Champ E-MAIL
let email = document.querySelector('#email')
let message_em = document.querySelector('#message_em')
// let mailExistant = []
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
    else if (array_contact.some(obj => obj.Email === email.value)) {
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
            // photo_contact.hidden = false
            photo_contact.style.display = "block"
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
    objet_contacts.Source = source
    const Source = objet_contacts.Source
    VALIDATION_img(objet_contacts, Source)
}

// Validation_img du formulaire (Liste des contacts)
function VALIDATION_img(objet_contacts, Source) {
    if (Source.length == 0) {
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
        message_img.innerText = "Inserer une image"
    }
    else if (INDENTITY(first_name, message_fn) && INDENTITY(names, message_n) && validation_img) {
        array_contact.push(objet_contacts)
        CONTACT(Source)
        reinit.click()
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
    numbers.style.border = '';
    message_num.innerText = '';
    message_em.innerText = '';
    email.style.border = '';
    message_g.innerText = '';
    group.style.border = '';
    bio.style.border = '';
    message_bio.innerText = '';
    instruction_img.hidden = false
    photo_contact.style.display = "none"
};

function DELET(icone_delete, rt, div) {
    icone_delete.addEventListener("click", function () {
        if (confirm("Etes-vous sûr de vouloir supprimer") == true) {
            rt.removeChild(div)
        }
    })
}

function CONTACT(Source) {
    rt.innerHTML = ""
    for (let i = 0; i < array_contact.length; i++) {
        let element = array_contact[i];
        const FN = element.First_Name
        const N = element.Names
        const Gp = element.Group
        const Em = element.Email
        const B = element.Bio
        const Num = element.Num
        const div = document.createElement("div")
        rt.appendChild(div)
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
        p1.innerText = `${FN} ${N}-${Gp}`
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
        p2.innerText = `${Num}-${Em}`
        const p3 = document.createElement("p")
        div_part2.appendChild(p3)
        p3.id = "paragraph_bio"
        p3.innerText = `${B}`
        DELET(icone_delete, rt, div)
        EDIT(icone_edit, FN, N, Num, B, Em, Gp, element)
    }
}

function EDIT(icone_edit, FN, N, Num, B, Em, Gp, element) {
    icone_edit.addEventListener("click", function () {
        first_name.value = FN
        names.value = N
        numbers.value = Num
        bio.value = B
        email.value = Em
        group.value = Gp
        submit.style.display = "none"
        modifier.style.display = "block"
        reinit.textContent = "Annuler"
        let index = array_contact.indexOf(element)
        MODIFIER(index)
    })
}
function MODIFIER(index) {
    modifier.addEventListener("click", function () {
        objet = {
            f: first_name.value,
            n: names.value,
            num: numbers.value,
            b: bio.value,
            em: email.value,
            g: group.value,
            s: source
        }
        // VALIDATION_img(objet, s)
        array_contact[index] = objet
        console.log(array_contact)
        CONTACT(source)
    })
}