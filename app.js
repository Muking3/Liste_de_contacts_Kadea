import { INPUT_STYLE, INIT, COMPARE } from './function.js'
const first_name = document.getElementById("first_name")
const message_fn = document.getElementById("message_fn")
first_name.addEventListener("blur", function () {
    COMPARE(first_name, message_fn, 3, 50, 'red')
})
const names = document.getElementById("names")
const message_n = document.getElementById("message_n")
names.addEventListener("blur", function () {
    COMPARE(names, message_n, 3, 50, 'red')
})
const numbers = document.getElementById("numbers")
const message_num = document.getElementById("message_num")
let exist_num = true
numbers.addEventListener('blur', function () {
    NUMBERS()
})
function NUMBERS() {
    let regex = /^(084|085|080|089|081|082|099|097|090)/
    let reg = /\d{10}$/
    if (isNaN(numbers.value)) {
        INPUT_STYLE(numbers, 'red')
        message_num.innerText = 'Le numero de téléphone ne contient que des chiffres';
    } else if (numbers.value.length != 10 || !reg.test(numbers.value)) {
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
        return exist_num
    }
}
const group = document.getElementById('group')
const message_g = document.getElementById('message_g')
group.addEventListener("blur", function () {
    COMPARE(group, message_g, 0, 10, "red")
})
const email = document.querySelector('#email')
const message_em = document.querySelector('#message_em')
let exist_email = true
email.addEventListener('blur', EMAIL)
function EMAIL() {
    let Regex = /^[A-Za-z0-9\.\_\-]+[A-Za-z0-9]@[A-Za-z0-9]+(\.)[A-Za-z0-9]{2,}$/
    let reg = /\w{320}/
    if (!Regex.test(email.value) || reg.test(email.value)) {
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
        return exist_email
    }
}
const bio = document.querySelector('#text_bio')
const message_bio = document.getElementById('message_bio')
bio.addEventListener('input', function () {
    COMPARE(bio, message_bio, 10, 150, 'red')
})
const drop_image = document.querySelector("#drop_image")
const input_img = document.querySelector("#input_img")
const message_img = document.querySelector("#message_img")
const instruction_img = document.querySelector("#instruction_img")
const photo_contact = document.querySelector("#photo_contact")
let source = ""
let src_edit, validate_img
drop_image.addEventListener("dragover", (event) => {
    event.preventDefault()
    INPUT_STYLE(drop_image, '#0880D6')
})
drop_image.addEventListener("dragleave", () => {
    drop_image.style.border = ""
    instruction_img.style.display = "none"
    photo_contact.style.display = "block"
})
input_img.addEventListener("change", () => {
    let imgs = input_img.files[0]
    PHOTO(imgs)
})
function PHOTO(file) {
    let fileType = file.type
    let tableRegex = /png$|jpe?g$/
    if (!tableRegex.test(fileType)) {
        INPUT_STYLE(drop_image, 'red')
        message_img.innerText = "Format de l'image invalide"
    } else if (file.size > 5242880) {
        INPUT_STYLE(drop_image, 'red')
        message_img.innerText = "Taille de l'image depasse 5Mo"
    } else {
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
            src_edit = fileSource
            validate_img = true
        }
    }
}
const array_contact = []
const form = document.querySelector("form")
const contact_view = document.querySelector("#contact_view")
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
        SHOW_CONTACT()
        REINIT()
    }
})
function VALIDATION(Source) {
    if (Source.length == 0) {
        INPUT_STYLE(drop_image, 'red')
        message_img.innerText = "Inserer une image"
    } else if (COMPARE(first_name, message_fn, 3, 50, 'red') && COMPARE(names, message_n, 3, 50, 'red') && NUMBERS() && COMPARE(bio, message_bio, 10, 200) && COMPARE(group, message_g, 0, 10, "red") && EMAIL() && validate_img) {
        return true
    }
}
const reinit = document.getElementById('reinit');
reinit.addEventListener('click', REINIT)
function REINIT() {
    INIT(first_name, message_fn)
    INIT(names, message_n)
    INIT(group, message_g)
    INIT(numbers, message_num)
    INIT(email, message_em)
    INIT(bio, message_bio)
    INIT(drop_image, message_img)
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
    contact_view.innerHTML = ""
    for (let i = 0; i < array_contact.length; i++) {
        let element = array_contact[i];
        const div = document.createElement("div")
        contact_view.appendChild(div)
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
function INIT_IMG(x, y) {
    edit.style.display = x
    submit.style.display = y
    exit.style.display = x
    reinit.style.display = y
}
let indexo, n, m
function ICONE_EDIT(icone_edit, First_Name, Names, Numbers, Bio, Email, Group, element, Source_img) {
    icone_edit.addEventListener("click", function () {
        REINIT()
        first_name.value = First_Name
        names.value = Names
        numbers.value = Numbers
        n = Numbers
        m = Email
        bio.value = Bio
        email.value = Email
        group.value = Group
        first_name.focus()
        src_edit = Source_img
        INIT_IMG("block", "none")
        indexo = array_contact.indexOf(element)
    })
}
edit.addEventListener("click", BTN_EDIT)
function BTN_EDIT() {
    let object_edit = {
        First_Name: first_name.value,
        Names: names.value,
        Numbers: numbers.value,
        Bio: bio.value,
        Email: email.value,
        Group: group.value,
        Source: src_edit
    }
    INIT_IMG("none", "block")
    if (numbers.value == n) { exist_num = false }
    if (email.value == m) { exist_email = false }
    if (VALIDATION(object_edit.Source)) {
        array_contact[indexo] = object_edit
        SHOW_CONTACT()
        REINIT()
        exist_num = true
        exist_email = true
    } else { INIT_IMG("block", "none") }
}
exit.addEventListener("click", function () {
    REINIT()
    INIT_IMG("none", "block")
})
function ICON_DELETE(icon_delete, index) {
    icon_delete.addEventListener("click", function () {
        if (confirm("Etes-vous sûr de vouloir supprimer ?") == true) {
            array_contact.splice(index, 1)
            SHOW_CONTACT()
            exit.click()
        }
    })
}