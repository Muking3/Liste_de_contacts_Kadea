const array_contact = []

const form = document.querySelector("form")
form.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
    }
})
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const data = new FormData(form)
    // console.log(data.get("names"));
    // console.log(data.get("numbers"));
    const objet_contacts = Object.fromEntries(data)
    array_contact.push(objet_contacts)
    console.log(objet_contacts);
    console.log(array_contact);


    // Creation variable
    const First_Name = objet_contacts.First_Name
    // console.log(first_name.length);
    FIRSTNAME(First_Name)
    const Names = objet_contacts.Names
    const Numbers = objet_contacts.Numbers
    const Groups = objet_contacts.Groups
    const Email = objet_contacts.Email
    const Bio = objet_contacts.Bio


})


// Champs PRENOM
let first_name = document.querySelector("#first_name")
const message_fn = document.querySelector("#message_fn")
// first_name.addEventListener("blur", FIRSTNAME(first_name.value))
function FIRSTNAME(f_n) {
    if (f_n.length < 3 || f_n.length > 50) {
        // console.log("co");
        first_name.style.border = "2px solid red"
        first_name.style.borderRadius = "5px"
        if (f_n.length < 3) {
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
    else {
        message_n.innerText = ''
        names.style.border = ''
        names.style.borderRadius = ''
    }
}

//Champs GROUP
let group = document.getElementById('group')
group.addEventListener('blur', GROUP)
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

const input_image = document.querySelector("#input_image")
let input_upload = document.querySelector("#input_upload")
const message_img = document.querySelector("#message_img")
const span = document.querySelector("#span")
input_image.onclick = () => {
    input_upload.click()
}

input_image.addEventListener("dragover", (event) => {
    event.preventDefault()
    input_image.style.border = "2px solid #0880D6"
    input_image.style.borderRadius = "5px"
})

input_image.addEventListener("dragleave", () => {
    input_image.style.border = ""
})

input_image.ondrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.files[0];
    console.log(data);
    if (typeof (data) == "undefined" || data.type == "") {
        span.innerHTML = "ERREUR DU NAVIGATEUR"
        input_image.style.border = "2px solid red"
        input_image.style.borderRadius = "5px"
    }
    else {
        Show_img(data)
    }
}

input_upload.addEventListener("change", () => {
    let imgs = input_upload.files[0]
    Show_img(imgs)
})
function Show_img(file) {
    let fileType = file.type
    console.log(file.size)
    let tableRegex = /png$|jpe?g$/
    if (tableRegex.test(fileType) && file.size < 2000) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            let fileSource = reader.result
            console.log(fileSource);
            input_image.innerHTML = `<img src="${fileSource}" alt="image_contact">`
            message_img.innerText = ""
            input_image.style.border = ""
        }
    }
    else if (!tableRegex.test(fileType)) {
        console.log(fileType)
        input_image.style.border = "2px solid red"
        input_image.style.borderRadius = "5px"
        message_img.innerText = "Format de l'image invalide"
        input_image.innerHTML = `<span class="weight_medium" id="span">
        Deposer la photo <br>ici
    </span>`
    }
    else if (file.size > 2000) {
        console.log(fileType)
        input_image.style.border = "2px solid red"
        input_image.style.borderRadius = "5px"
        message_img.innerText = "Taille de l'image depasse 5Mo"
        input_image.innerHTML = `<span class="weight_medium">
        Deposer la photo <br>ici
    </span>`
    }
}










const submit = document.querySelector("#submit")
submit.addEventListener("click", creatContact)
function creatContact() {

}




























