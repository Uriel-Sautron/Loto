const form = document.querySelector("form")

const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

const winNumber = () => {
    const arrayNumbers = []
    for (let i = 1; i <= 5; i++) {
        let number = (Math.random() * (49 - 1) + 1).toFixed(0)
        arrayNumbers.push(number)
    };
    const lastWinNumber = (Math.random() * (10 - 1) + 1).toFixed(0)
    arrayNumbers.push(lastWinNumber)

    return arrayNumbers
}

const winningNumbers = winNumber()
console.log(winningNumbers)

const userLoto = (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#firstname").value
    const lastName = document.querySelector("#lastname").value
    const email = document.querySelector("#email").value
    const number1 = document.querySelector(`#number1`).value
    const number2 = document.querySelector(`#number2`).value
    const number3 = document.querySelector(`#number3`).value
    const number4 = document.querySelector(`#number4`).value
    const number5 = document.querySelector(`#number5`).value
    const number6 = document.querySelector(`#number6`).value
    const userLotoNumbers = [number1, number2, number3, number4, number5, number6]

    checkLoto(firstName, lastName, email, userLotoNumbers)
}

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
    if (!firstname) {
        alert("Veuillez fournir un prénom svp")
        return false
    }

    if (!lastname) {
        alert("Veuillez fournir un nom svp")
        return false
    }

    if (!email) {
        alert("Veuillez fournir un email")
        return false;
    }

    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;
    if (!email.match(regexEmail) || email.length < 8 || email.length > 30) {
        alert("Votre email n'est pas valide")
        return false
    }

    if (lotoNumbers.filter(number => number !== "").length !== 6) {
        alert("Entrez 6 chiffres")
        return false
    }

    equals(lotoNumbers, winningNumbers) ? alert("Bravo tu est Millionnaire") : alert("Tu auras plus de chance la prochaine fois")
};

form.addEventListener("submit", userLoto)