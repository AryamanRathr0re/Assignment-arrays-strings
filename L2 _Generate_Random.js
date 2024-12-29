
function generatePassword(length, includeNumbers = true, includeSpecialChars = true) {

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercase = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let special = "@#*!$%^&*?"

    let allChars = uppercase + lowercase

    if (includeNumbers) {
        allChars += numbers
    }
    if (includeSpecialChars) {
        allChars += special
    }

    function generateRandom(charSet) {
        return charSet[Math.floor(Math.random() * charSet.length)]
    }

    let password = generateRandom(uppercase)
    if (includeNumbers) {
        password += generateRandom(numbers)
    }
    if (includeSpecialChars) {
        password += generateRandom(special)
    }
    while (password.length < length) {
        password += generateRandom(allChars)
    }

    return password


}
console.log(generatePassword(10, true, true))
