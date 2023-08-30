function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let msgbd = document.getElementById('msg2')
    let data = new Date()
    let hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#FDCDA4'
        msgbd.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#6B381A'
        msgbd.innerHTML = 'Boa tarde!'
    } else {
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#0c3754'
        msgbd.innerHTML = 'Boa noite!'
    }

}


