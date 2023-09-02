function clicar() {
    let data = new Date
    let ano = data.getFullYear()  
    let fano = document.getElementById('idade')
    let res = document.getElementById('msg')
    let img = document.getElementById('foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Data não reconhecida')
    } else {
        let sexo = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gen = ''
        if (sexo[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_masc.jpg')
            } else if (idade >= 10 && idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/adol_masc.jpg')
            } else if (idade >= 18 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adul_masc.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idos_masc.jpg')
            }
                
        } else {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_fem.jpg')
            } else if (idade >= 10 && idade < 18) {
                //Adolescente
                ('src', 'imagens/adol_fem.jpg')
            } else if (idade >= 18 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adul_fem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idos_fem.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }



}
