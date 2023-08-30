let agora = new Date()
let hora = agora.getHours()

if (hora >= 0 && hora < 6) {
    console.log('Está de madrugada!')
} else if (hora >= 6 && hora < 13) {
    console.log('Está de manhã!')
} else if (hora >= 13 && hora < 18) {
    console.log('Está de tarde!')
} else {
    console.log('Está de noite!')
}