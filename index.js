const array_contact = []
const object_contact = {
    first_name: document.querySelector("#first_nam"),
    names: document.querySelector("#names"),
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

