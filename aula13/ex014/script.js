function clicar() {
    let data = new Date
    let ano = data.getFullYear()  
    let fano = document.getElementById('idade')
    let res = document.getElementById('msg')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Data não reconhecida')
    } else {
        let sexo = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gen = ''
        if (sexo[0].checked) {
            gen = 'Homem'
        } else {
            gen = 'Mulher'
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }



}
