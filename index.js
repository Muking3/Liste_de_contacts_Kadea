const array_contact = []
const object_contact = {
    first_name: document.querySelector("#first_nam"),
    names: document.querySelector("#names"),
    numbers: document.querySelector("#numbers"),
    email: document.querySelector("#email"),
}
console.log(names);
const p_fn_3 = document.querySelector(".p_fn_3")
p_fn_3.hidden = true
const p_fn_50 = document.querySelector(".p_fn_50")
p_fn_50.hidden = true
first_name.addEventListener("blur", function () {
    if (first_name.value.length < 3 || first_name.value.length > 50) {
        first_name.style.border = "2px solid red"
        first_name.style.borderRadius = "5px"
        if (first_name.value.length < 3) {
            p_fn_3.hidden = false
            p_fn_50.hidden = true
        }
        else {
            p_fn_3.hidden = true
            p_fn_50.hidden = false
        }
    }
    else {
        first_name.style.border = ""
        first_name.style.borderRadius = ""
        p_fn_3.hidden = true
        p_fn_50.hidden = true
    }
})
const p_n_3 = document.querySelector(".p_n_3")
p_n_3.hidden = true
const p_n_50 = document.querySelector(".p_n_50")
p_n_50.hidden = true
names.addEventListener("blur", function () {
    if (names.value.length < 3 || names.value.length > 50) {
        names.style.border = "2px solid red"
        names.style.borderRadius = "5px"
        if (names.value.length < 3) {
            p_n_3.hidden = false
            p_n_50.hidden = true
        }
        else {
            p_n_3.hidden = true
            p_n_50.hidden = false
        }
    }
    else {
        names.style.border = ""
        names.style.borderRadius = ""
        p_n_3.hidden = true
        p_n_50.hidden = true
    }
})

const p_num = document.querySelector(".p_num")
p_num.hidden = true
const p_num_v = document.querySelector(".p_num_v")
p_num_v.hidden = true
const p_num_f = document.querySelector(".p_num_f")
p_num_f.hidden = true
const p_num_u = document.querySelector(".p_num_u")
p_num_u.hidden = true
numbers.addEventListener("blur", function () {
    if (isNaN(numbers.value)) {
        numbers.style.border = "2px solid red"
        numbers.style.borderRadius = "5px"
        p_num_v.hidden = false
        p_num_f.hidden = true
        p_num_u.hidden = true
        p_num.hidden = true
    }
    else if (numbers.value.length != 10) {
        numbers.style.border = "2px solid red"
        numbers.style.borderRadius = "5px"
        p_num.hidden = false
        p_num_v.hidden = true
        p_num_f.hidden = true
        p_num_u.hidden = true
    }
    else if (numbers.value.substring(0, 3) != "084" && numbers.value.substring(0, 3) != "085" && numbers.value.substring(0, 3) != "080" && numbers.value.substring(0, 3) != "089" && numbers.value.substring(0, 3) != "081" && numbers.value.substring(0, 3) != "082" && numbers.value.substring(0, 3) != "099" && numbers.value.substring(0, 3) != "097" && numbers.value.substring(0, 3) != "090") {
        // console.log(typeof(numbers.value));
        numbers.style.border = "2px solid red"
        numbers.style.borderRadius = "5px"
        p_num_f.hidden = false
        p_num_v.hidden = true
        p_num.hidden = true
        p_num_u.hidden = true
    }

    // else if (numbers.value.substring(0,3) != "084" && numbers.value.substring(0,3) != "085" && numbers.value.substring(0,3) != "080" && numbers.value.substring(0,3) != "089" && numbers.value.substring(0,3) != "081" && numbers.value.substring(0,3) != "082" && numbers.value.substring(0,3) != "099" && numbers.value.substring(0,3) != "097" && numbers.value.substring(0,3) != "090") {
    //     // console.log(typeof(numbers.value));
    //     numbers.style.border = "2px solid red"
    //     numbers.style.borderRadius = "5px"
    //     p_num_f.hidden = false
    //     p_num_v.hidden = true
    //     p_num.hidden = true
    //     p_num_u.hidden = true
    // }

    else {
        numbers.style.border = ""
        numbers.style.borderRadius = ""
        p_num.hidden = true
        p_num_v.hidden = true
        p_num_f.hidden = true
        p_num_u.hidden = true
    }
})

const p_email = document.querySelector(".p_email")
p_email.hidden = true
const p_email_u = document.querySelector(".p_email_u")
p_email_u.hidden = true
email.addEventListener("blur", function () {
    // if () {
    //     email.style.border = "2px solid red"
    //     email.style.borderRadius = "5px"
    //     p_email_u.hidden = true
    //     p_email.hidden = false
    // }

    // // else if (isNaN(email.value)) {
    // //     email.style.border = "2px solid red"
    // //     email.style.borderRadius = "5px"
    // //     p_email_u.hidden = true
    // //     p_email.hidden = true
    // // }

    // else {
    //     email.style.border = ""
    //     email.style.borderRadius = ""
    //     p_email_u.hidden = true
    //     p_email.hidden = true
    // }
})





























// // first_name.onfocus = first_name.style.outlineColor = "red"
// // if (first_name.onfocus) {
// //     first_name.style.outlineColor = "red"
// // }

// // alert(first_name.value)
// if (first_name.value.lenght < 3) {
//     alert(first_name.value)
//     // first_name.onblur = function () {
//         // first_name.style.outlineColor = "red"
// }
//     // first_name.onblur = function () {
//     //     if (first_name.value.lenght < 3) {
//     //         first_name.style.outlineColor = "red"
//     //     }
//     //     // alert(first_name.value)
//     //     // first_name.style.outlineColor = "red"
//     // }

//     // first_name.addEventListener("blur",function () {
//     //         first_name.style.outlineColor = "red"

