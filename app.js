//Fonction STANDARD
function INPUT_STYLE(input, color) {
    input.style.border = `2px solid ${color}`
    input.style.borderRadius = "5px"
}
function INIT(input, message) {
    input.style.border = ""
    input.style.borderRadius = ""
    message.innerText = ""
}
function COMPARE(input, message, min, max, color) {
    let value_id = input.value.trim()
    if (value_id.length < min) {
        INPUT_STYLE(input, color)
        message.innerText = `Nombre de caractere insuffisant, ne doit pas etre en-deçà de ${min} caracteres`
    } else if (value_id.length > max) {
        INPUT_STYLE(input, color)
        message.innerText = `Nombre de caractere insuffisant, ne doit pas etre au delà de ${max} caracteres`
    } else {
        INIT(input, message)
        return true
    }
}
// Champ PRENOM
const first_name = document.getElementById("first_name")
const message_fn = document.getElementById("message_fn")
first_name.addEventListener("blur", function () {
    COMPARE(first_name, message_fn, 3, 50, 'red')
})
// Champ NOM
const names = document.getElementById("names")
const message_n = document.getElementById("message_n")
names.addEventListener("blur", function () {
    COMPARE(names, message_n, 3, 50, 'red')
})
// Champ TEL
const numbers = document.getElementById("numbers")
const message_num = document.getElementById("message_num")
numbers.addEventListener('blur', function () {
    // if (NUMBERS() && EXIST()) { }
    NUMBERS()
});
let kl = true
function NUMBERS() {
    let regex = /^(084|085|080|089|081|082|099|097|090)/
    let reg = /\d{10}$/
    if (isNaN(numbers.value)) {
        INPUT_STYLE(numbers, 'red')
        message_num.innerText = 'Le numero de téléphone ne contient que des chiffres';
    } else if (!reg.test(numbers.value)) {
        INPUT_STYLE(numbers, 'red')
        message_num.innerText = 'Erreur, renseigner un numéro de téléphone avec 10 chiffres ';
    } else if (EXIST_NUM()) {
        INPUT_STYLE(numbers, 'red')
        message_num.innerText = "Le numéro existe déjà.";
    } else if (!regex.test(numbers.value)) {
        INPUT_STYLE(numbers, 'red')
        message_num.innerText = "Renseigner un numéro de téléphone au format valide";
    } else {
        INIT(numbers, message_num)
        return true
    }
}

function EXIST_NUM() {
    if (array_contact.some(obj => obj.Numbers === numbers.value)) {
        return kl
    }
}
// Champ GROUPE
const group = document.getElementById('group')
const message_g = document.getElementById('message_g')
group.addEventListener("blur", function () {
    GROUP(group, message_g, 10)
})
function GROUP(input, message, max) {
    let value_id = input.value.trim()
    if (value_id.length > max) {
        INPUT_STYLE(input, 'red')
        message.innerText = `Nombre de caractere insuffisant, ne doit pas etre en-deçà de ${max} caracteres`
    }
    else {
        INIT(input, message)
        return true
    }
}
// Champ E-MAIL
const email = document.querySelector('#email')
const message_em = document.querySelector('#message_em')
email.addEventListener('blur', EMAIL)
let k = true
function EMAIL() {
    let Regex = /^[A-Za-z0-9\.-\_]+@[A-Za-z0-9]+(\.)[A-Za-z0-9]{2,}$/
    if (!Regex.test(email.value)) {
        INPUT_STYLE(email, 'red')
        message_em.innerText = 'Adresse invalide!'
    }
    else if (EXIST_EMAIL()) {
        INPUT_STYLE(email, 'red')
        message_em.innerText = 'Adresse déjà existante';
    }
    else {
        INIT(email, message_em)
        return true
    }
}
function EXIST_EMAIL() {
    if (array_contact.some(obj => obj.Email === email.value)) {
        return k
    }
}
//Champs BiO
const bio = document.querySelector('#text_bio')
const message_bio = document.getElementById('message_bio')
bio.addEventListener('input', function () {
    COMPARE(bio, message_bio, 10, 200, 'red')
})
// Champs IMAGE
const drop_image = document.querySelector("#drop_image")
const input_img = document.querySelector("#input_img")
const message_img = document.querySelector("#message_img")
const instruction_img = document.querySelector("#instruction_img")
const photo_contact = document.querySelector("#photo_contact")
let source = ""
let ss
let validate_img
drop_image.addEventListener("dragover", (event) => {
    event.preventDefault()
    INPUT_STYLE(drop_image, '#0880D6')
    instruction_img.style.display = "none"
})
drop_image.addEventListener("dragleave", () => {
    drop_image.style.border = ""
    instruction_img.style.display = "block"
})
input_img.addEventListener("change", () => {
    let imgs = input_img.files[0]
    PHOTO(imgs)
})
function PHOTO(file) {
    let fileType = file.type
    let tableRegex = /png$|jpe?g$/
    if (!tableRegex.test(fileType)) {
        INPUT_STYLE(drop_image)
        message_img.innerText = "Format de l'image invalide"
    }
    else if (file.size > 5242880) {
        INPUT_STYLE(drop_image)
        message_img.innerText = "Taille de l'image depasse 5Mo"
    }
    else {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            let fileSource = reader.result
            instruction_img.style.display = "none"
            photo_contact.src = fileSource
            photo_contact.alt = "image du contact"
            photo_contact.style.display = "block"
            message_img.innerText = ""
            drop_image.style.border = ""
            source = fileSource
            ss = fileSource
            validate_img = true
        }
    }
}
// Envoie du formulaire
const array_contact = []
const form = document.querySelector("form")
const rt = document.querySelector("#rt")
const edit = document.querySelector("#edit")
edit.style.display = "none"
const submit = document.querySelector("#submit")
const exit = document.querySelector("#exit")
exit.style.display = "none"
form.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
    }
})
submit.addEventListener("click", function (e) {
    e.preventDefault()
    let data = new FormData(form)
    const objet_contacts = Object.fromEntries(data)
    objet_contacts.Source = source
    const Source = objet_contacts.Source
    if (VALIDATION(Source)) {
        array_contact.push(objet_contacts)
        console.log(array_contact);
        SHOW_CONTACT()
        REINIT()
    }
})
// Validation_img du formulaire (Liste des contacts)
function VALIDATION(Source) {
    if (Source.length == 0) {
        INPUT_STYLE(drop_image, 'red')
        message_img.innerText = "Inserer une image"
    }
    else if (COMPARE(first_name, message_fn, 3, 50, 'red') && COMPARE(names, message_n, 3, 50, 'red') && NUMBERS() && COMPARE(bio, message_bio, 10, 200) && GROUP(group, message_g, 10) && EMAIL() && validate_img) {
        return true
    }
}
// Reinitialisation de formulaire.
const reinit = document.getElementById('reinit');
reinit.addEventListener('click', REINIT)
function REINIT() {
    INIT(first_name, message_fn)
    INIT(names, message_n)
    INIT(group, message_g)
    INIT(numbers, message_num)
    INIT(email, message_em)
    INIT(bio, message_bio)
    first_name.value = ''
    names.value = ''
    numbers.value = ''
    group.value = ''
    email.value = ''
    bio.value = ''
    instruction_img.style.display = "block"
    photo_contact.style.display = "none"
    input_img.value = ""
    source = ""
    photo_contact.src = "#"
    photo_contact.alt = ""
}
function SHOW_CONTACT() {
    rt.innerHTML = ""
    for (let i = 0; i < array_contact.length; i++) {
        let element = array_contact[i];
        console.log(element);
        // const template_contact = document.querySelector("#template_contact")
        // const clone = document.importNode(template_contact.content, true)
        // console.log(clone);
        // console.log(clone.innerHTML);
        // const contact_list = document.querySelector("#contact_list")
        // const photo_contact_list = clone.querySelector("#photo_contact_list")
        // photo_contact_list.src = Source_img
        // photo_contact_list.alt = "photo du contact"
        // const para = clone.querySelector("#para")
        // para.textContent = `${First_Name} ${Names}-${Group}`
        // const paragraph_num_email = clone.querySelector("#paragraph_num_email")
        // paragraph_num_email.textContent = `${Numbers}-${Email}`
        // const paragraph_bio = clone.querySelector("#paragraph_bio")
        // paragraph_bio.textContent = `${Bio}`
        // rt.appendChild(contact_list)
        // const icon_delete = document.querySelector("#delete")
        // console.log(icon_delete);
        // const icone_edit = document.querySelector("#editz")

        const div = document.createElement("div")
        rt.appendChild(div)
        div.classList.add("contact_list")
        const div_list_img = document.createElement("div")
        div.appendChild(div_list_img)
        div_list_img.classList.add("contact_list_img")
        const img_contact = document.createElement("img")
        div_list_img.appendChild(img_contact)
        img_contact.src = element.Source
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
        p1.innerText = `${element.First_Name} ${element.Names} - ${element.Group}`
        const div_part1 = document.createElement("div")
        div_text_part.appendChild(div_part1)
        const icone_edit = document.createElement("img")
        div_part1.appendChild(icone_edit)
        icone_edit.id = "space_between_icon"
        icone_edit.src = "edit icon.svg"
        icone_edit.alt = "icone edit"
        const icon_delete = document.createElement("img")
        div_part1.appendChild(icon_delete)
        icon_delete.src = "delete icon.svg"
        icon_delete.alt = "icone supprimer"
        const div_part2 = document.createElement("div")
        div_text.appendChild(div_part2)
        const p2 = document.createElement("p")
        div_part2.appendChild(p2)
        p2.id = "paragraph_num_email"
        p2.innerText = `${element.Numbers} - ${element.Email}`
        const p3 = document.createElement("p")
        div_part2.appendChild(p3)
        p3.id = "paragraph_bio"
        p3.innerText = `${element.Bio}`
        ICON_DELETE(icon_delete, i)
        ICONE_EDIT(icone_edit, element.First_Name, element.Names, element.Numbers, element.Bio, element.Email, element.Group, element, element.Source)
    }
}
let indexo
let n
let m
function ICONE_EDIT(icone_edit, First_Name, Names, Numbers, Bio, Email, Group, element, Source_img) {
    icone_edit.addEventListener("click", function () {
        REINIT()
        console.log('dj');
        first_name.value = First_Name
        names.value = Names
        numbers.value = Numbers
        n = Numbers
        m = Email
        console.log(n);
        bio.value = Bio
        email.value = Email
        group.value = Group
        console.log(Source_img);
        // instruction_img.style.display = "none"
        photo_contact.src = Source_img
        ss = Source_img
        // photo_contact.alt = "image du contact"
        // photo_contact.style.display = "block"
        submit.style.display = "none"
        reinit.style.display = "none"
        edit.style.display = "block"
        exit.style.display = "block"
        indexo = array_contact.indexOf(element)
        console.log('index : ', indexo);
        console.log("on va voir :", first_name.value);
    })
}
edit.addEventListener("click", BTN_EDIT)
function BTN_EDIT() {
    object_edit = {
        First_Name: first_name.value,
        Names: names.value,
        Numbers: numbers.value,
        Bio: bio.value,
        Email: email.value,
        Group: group.value,
        Source: ss
        // Source : source
    }
    console.log(object_edit);
    console.log(array_contact);
    edit.style.display = "none"
    submit.style.display = "block"
    exit.style.display = "none"
    reinit.style.display = "block"
    if (numbers.value == n) {
        kl = false
    }
    if (email.value == m) {
        k = false
    }
    if (VALIDATION(object_edit.Source)) {
        array_contact[indexo] = object_edit
        SHOW_CONTACT()
        REINIT()
        kl = true
        k = true
    }
    else {
        submit.style.display = "none"
        reinit.style.display = "none"
        edit.style.display = "block"
        exit.style.display = "block"
    }
}
exit.addEventListener("click", function () {
    REINIT()
    edit.style.display = "none"
    submit.style.display = "block"
    exit.style.display = "none"
    reinit.style.display = "block"
})
function ICON_DELETE(icon_delete, index) {
    icon_delete.addEventListener("click", function () {
        // let index = array_contact.indexOf(element)
        if (confirm("Etes-vous sûr de vouloir supprimer") == true) {
            array_contact.splice(index, 1)
            SHOW_CONTACT()
            REINIT()
            edit.style.display = "none"
            submit.style.display = "block"
            exit.style.display = "none"
            reinit.style.display = "block"
            console.log(array_contact)
        }
    })
}

// const template_contact = document.querySelector("#template_contact")
// const clone = document.importNode(template_contact.content, true)
// console.log(clone);
// const photo_contact_list = clone.querySelector("#photo_contact_list")
// const para = clone.querySelector("#para")
// const paragraph_num_email = clone.querySelector("#paragraph_num_email")
// const paragraph_bio = clone.querySelector("#paragraph_bio")
