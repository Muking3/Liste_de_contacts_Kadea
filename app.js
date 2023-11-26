const array_contact = []



const first_name = document.getElementById('first_name')
const names = document.getElementById('names')
const message_fn = document.querySelector("#message_fn")
const message_n = document.querySelector("#message_n")


const form = document.querySelector("form")
form.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
    }
})
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const data = new FormData(form)
    const objet_contacts = Object.fromEntries(data)
    console.log(objet_contacts);
    console.log(array_contact);


    // Creation variable
    const First_Name = objet_contacts.First_Name
    // console.log(First_Name.length);
    const Names = objet_contacts.Names
    const Numbers = objet_contacts.Numbers
    const Groups = objet_contacts.Groups
    const Email = objet_contacts.Email
    const Bio = objet_contacts.Bio
    // if (IDENTITY(First_Name, first_name, message_fn) && IDENTITY(Names, names, message_n)) {
    //     array_contact.push(objet_contacts)
    // }
    if (IDENTITY() && IDENTITi()) {
        array_contact.push(objet_contacts)
    }
})


// Champs IDENTITY (PRENOM, NOM)

first_name.addEventListener("blur", IDENTITY)
function IDENTITY() {
    let f_n = first_name.value
    let identity = first_name
    let message = message_fn
    if (f_n.length < 3 || f_n.length > 50) {
        identity.style.border = "2px solid red"
        identity.style.borderRadius = "5px"
        if (f_n.length < 3) {
            message.innerText = "Nombre de caractére insuffisant, entrez plus de 2 caracteres"
        }
        else {
            message.innerText = "Nombre de caractére execessif, ne doit pas aller au-dèla de 50"
        }
    }
    else {
        identity.style.border = ""
        identity.style.borderRadius = ""
        message.innerText = ""
        return true
    }
}


names.addEventListener("blur", IDENTITi)
function IDENTITi() {
    let f_n = names.value
    let identity = names
    let message = message_n
    if (f_n.length < 3 || f_n.length > 50) {
        identity.style.border = "2px solid red"
        identity.style.borderRadius = "5px"
        if (f_n.length < 3) {
            message.innerText = "Nombre de caractére insuffisant, entrez plus de 2 caracteres"
        }
        else {
            message.innerText = "Nombre de caractére execessif, ne doit pas aller au-dèla de 50"
        }
    }
    else {
        identity.style.border = ""
        identity.style.borderRadius = ""
        message.innerText = ""
        return true
    }
}
// console.log(IDENTITY);
// function IDENTITY(f_n, identity, message) {
//     if (f_n.length < 3 || f_n.length > 50) {
//         identity.style.border = "2px solid red"
//         identity.style.borderRadius = "5px"
//         if (f_n.length < 3) {
//             message.innerText = "Nombre de caractére insuffisant, entrez plus de 2 caracteres"
//         }
//         else {
//             message.innerText = "Nombre de caractére execessif, ne doit pas aller au-dèla de 50"
//         }
//     }
//     else {
//         identity.style.border = ""
//         identity.style.borderRadius = ""
//         message.innerText = ""
//         return true
//     }
// }

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




























