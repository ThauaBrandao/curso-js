//EXERCICIO 006

function calcular006() {
    let numero006 = document.querySelector("#numero006")
    let resultado006 = document.getElementById('resultado006')
    let dobro006 = Number(numero006.value) * 2
    let triplo006 = Number(numero006.value) * 3
    let rq006 = Number(numero006.value) * Number(numero006.value) 

    resultado006.innerHTML = `O dobro de ${Number(numero006.value)} é ${dobro006} <br> O triplo de ${Number(numero006.value)} é ${triplo006} <br> A raiz quadrada de ${Number(numero006.value)} é ${rq006}`
}

//EXERCICIO 007

function calcular007() {
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let res = document.getElementById('resultado007')
    let media = (Number(nota1.value) + Number(nota2.value)) / 2

    if (Number(nota1.value) > 10 || Number(nota2.value) > 10) {
        res.innerHTML = `A nota máxima é 10, calcule novamente!`
    } else {
        res.innerHTML = `A sua média é ${media}`
    }
}