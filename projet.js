//Champs BiO

let bio = document.querySelector('#bio');
let paragraph = document.querySelector('p');


bio.addEventListener('input', function () {
   
    if (this.value.length < 10) {

        let paragraph = document.createElement('p')
        let div = document.querySelector('#contenaire_bio');

        this.style.border = ' 2px solid red';
        this.style.borderRadius = "5px";
        paragraph.innerHTML = 'Erreur, nombre de caractères inférieur';
        div.appendChild(paragraph);


        bio.addEventListener('input', function() {
        paragraph.innerHTML = '';

        })

    } else if (this.value.length > 250) {

        let paragraph = document.createElement('p');
        let div = document.querySelector('#contenaire_bio');

        this.style.border = '2px solid red';
        paragraph.innerHTML = 'Erreur, nombre de caractères superieur';
        div.appendChild(paragraph);

        bio.addEventListener('input', function () {
            paragraph.innerHTML = '';
        })
    } else {
        this.style.border = '';
    }
});


// 
// //Telephone 

// function validate elephone() {
//     let telephoneInput = document.getElementById('telephone').value;

//     let pattern = /(081|099|085)\d{7}$/;
//     if (!pattern.test(telephoneInput)) {
//         document.getElementById("error message").innerHTML = "veillez entrer un numero de telephone valide";
//         event.preventDefault()
//     }







