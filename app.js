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
        return true
    }
}

//Champs BiO
const bio = document.querySelector('#text_bio')
bio.addEventListener('input', BIO)
function BIO() {
    if (bio.value.length < 10) {
        let message_bio = document.getElementById('message_bio')
        bio.style.border = '2px solid red'
        bio.style.borderRadius = "5px"
        message_bio.innerText = 'Erreur, nombre de caractères inferieur à 10'
    } else if (bio.value.length > 150) {
        let message_bio = document.getElementById('message_bio')
        bio.style.border = '2px solid red'
        bio.style.borderRadius = "5px"
        message_bio.innerText = 'Erreur, nombre de caractères superieur à 150'
    } else {
        bio.style.border = ''
        message_bio.innerText = ''
        return true
    }
}

// Champs IMAGE
const drop_image = document.querySelector("#drop_image")
const input_img = document.querySelector("#input_img")
const message_img = document.querySelector("#message_img")
// const span = document.querySelector("#span")

drop_image.onclick = () => {
    input_img.click()
}

drop_image.addEventListener("dragover", (event) => {
    event.preventDefault()
    drop_image.style.border = "2px solid #0880D6"
    drop_image.style.borderRadius = "5px"
})

drop_image.addEventListener("dragleave", () => {
    drop_image.style.border = ""
})
let objet
drop_image.ondrop = (e) => {
    e.preventDefault()
    let data = e.dataTransfer.files[0];
    objet = data
    // objet(data)
    console.log(data);
    if (typeof (data) == "undefined" || data.type == "") {
        span.innerHTML = "ERREUR DU NAVIGATEUR"
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
    }
    else {
        Show_img(data)
    }
}

input_img.addEventListener("change", () => {
    let imgs = input_img.files[0]
    console.log(imgs);
    // objet(imgs)
    objet = imgs
    Show_img(imgs)
})
let source
function Show_img(file) {
    let fileType = file.type
    console.log(file.size)
    let tableRegex = /png$|jpe?g$/
    if (!tableRegex.test(fileType)) {
        console.log(fileType)
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
        message_img.innerText = "Format de l'image invalide"
        //     drop_image.innerHTML = `<span class="weight_medium" id="span">
        //     Deposer la photo <br>ici
        // </span>`
    }
    else if (file.size > 5242880) {
        console.log(fileType)
        drop_image.style.border = "2px solid red"
        drop_image.style.borderRadius = "5px"
        message_img.innerText = "Taille de l'image depasse 5Mo"
        //     drop_image.innerHTML = `<span class="weight_medium">
        //     Deposer la photo <br>ici
        // </span>`
    }
    // else if (tableRegex.test(fileType) && file.size < 5242880) {
    //     let reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = function () {
    //         let fileSource = reader.result
    //         console.log(fileSource);
    //         drop_image.innerHTML = `<img src="${fileSource}" alt="image_contact">`
    //         message_img.innerText = ""
    //         drop_image.style.border = ""
    //     }
    // }
    else {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            let fileSource = reader.result
            console.log(fileSource);
            drop_image.innerHTML = `<img src="${fileSource}" alt="image_contact">`
            message_img.innerText = ""
            drop_image.style.border = ""
            source = fileSource
            objet = true
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
    console.log(data.get("Picture"));
    const objet_contacts = Object.fromEntries(data)
    console.log(objet_contacts);

    // Creation variable du formulaire
    const First_Name = objet_contacts.First_Name
    const Names = objet_contacts.Names
    const Numbers = objet_contacts.Numbers
    const Group = objet_contacts.Group
    const Email = objet_contacts.Email
    const Bio = objet_contacts.Bio
    objet_contacts.Picture = objet
    const Picture = objet_contacts.Picture
    VALIDATION(objet_contacts, First_Name, Names, Numbers, Group, Email, Bio)
}

// function objet(img) {
//     return img
// }

// Validation du formulaire (Liste des contacts)
function VALIDATION(objet_contacts, First_Name, Names, Numbers, Group, Email, Bio) {
    if (FIRSTNAME() && NAME() && GROUP() && BIO() && objet) {
        array_contact.push(objet_contacts)
        console.log(array_contact);
        const contact_box_list = document.querySelector(".contact_box_list")
        const div = document.createElement("div")
        contact_box_list.appendChild(div)
        div.classList.add("contact_list")
        // let file = Picture.files[0]
        // let reader = new FileReader()
        // reader.readAsDataURL(file)
        // reader.onload = function () {
        //     let fileSource = reader.result
        //     console.log(fileSource);
        div.innerHTML = `<div class="contact_list_img">
                                <img src="${source}" alt="photo du contact">
                            </div>
                            <div class="contact_list_text">
                                        <div>
                                            <div class="contact_text">
                                                <p>${First_Name} ${Names}-${Group}</p>
                                                <div>
                                                    <img id="space_between_icon" src="edit icon.svg"
                                                        alt="icone modifier">
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
        // }
    }
}


































