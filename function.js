//Fonction STANDARD
export function INPUT_STYLE(input, color) {
    input.style.border = `2px solid ${color}`
    input.style.borderRadius = "5px"
}
export function INIT(input, message) {
    input.style.border = ""
    input.style.borderRadius = ""
    message.innerText = ""
}
export function COMPARE(input, message, min, max, color) {
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