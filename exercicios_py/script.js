//EXERCICIO 006

function calcular006() {
    let numero006 = document.querySelector("#numero006")
    let res006 = document.getElementById('resultado006')
    let dobro006 = Number(numero006.value) * 2
    let triplo006 = Number(numero006.value) * 3
    let rq006 = Number(numero006.value) * Number(numero006.value) 

    res006.innerHTML = `O dobro de ${Number(numero006.value)} é <strong>${dobro006}</strong> <br> O triplo de ${Number(numero006.value)} é <strong>${triplo006}</strong> <br> A raiz quadrada de ${Number(numero006.value)} é <strong>${rq006}</strong>`
}

//EXERCICIO 007

function calcular007() {
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let res = document.getElementById('resultado007')
    let media = (Number(nota1.value) + Number(nota2.value)) / 2

    if (Number(nota1.value) > 10 || Number(nota2.value) > 10) {
        res.innerHTML = `A nota máxima é <strong>10</strong>, calcule novamente!`
    } else {
        res.innerHTML = `A sua média é <strong>${media}</strong>`
    }
}

//EXERCICIO 008

function calcular008() {
    let valor1 = document.getElementById('numero008')
    let res008 = document.getElementById('resultado008')
    let km = Number(valor1.value) / 1000
    let hm = Number(valor1.value) / 100
    let dam = Number(valor1.value) / 10
    let dm = Number(valor1.value) * 10
    let cm = Number(valor1.value) * 100
    let mm = Number(valor1.value) * 1000
    res008.innerHTML = `A medida de ${Number(valor1.value)}m corresponde a <strong>${km}km</strong> <br> A medida de ${Number(valor1.value)}m corresponde a <strong>${hm}hm</strong> <br> A medida de ${Number(valor1.value)}m corresponde a <strong>${dam}dam</strong> <br> A medida de ${Number(valor1.value)}m corresponde a <strong>${dm}dm</strong> <br> A medida de ${Number(valor1.value)}m corresponde a <strong>${cm}cm</strong> <br> A medida de ${Number(valor1.value)}m corresponde a <strong>${mm}mm</strong> <br> `
}

//EXERCICIO 009

function calcular009() {
    let valor1 = document.getElementById('numero009')
    let res009 = document.getElementById('resultado009')
    res009.innerHTML = ``
    for (let i= 1; i < 11; i++) {
        let mult009 = Number(valor1.value) * i
        res009.innerHTML += `${i} x ${Number(valor1.value)} = <strong>${mult009}</strong> | `
        if (i == 2 || i == 4 || i == 6 || i == 8 || i == 10 ) {
            res009.innerHTML += `<br> `
        }

    }
}

//EXERCICIO 010

function calcular010() {
    let valor1 = document.getElementById('numero010')
    let moeda = document.getElementsByName('moeda')
    let dolar = Number(valor1.value) / 4.97
    let euro = Number(valor1.value) / 5.33
    let libra = Number(valor1.value) / 6.24
    let bitcoin = Number(valor1.value) / 128225.76
    let res010 = document.getElementById('resultado010')
    if (moeda[0].checked) {
        res010.innerHTML = `A quantidade de dinheiro que você tem em <strong>Dólar</strong> é de: <strong>${dolar.toFixed(2)}$</strong>`
    } else if (moeda[1].checked) {
        res010.innerHTML = `A quantidade de dinheiro que você tem em <strong>Euro</strong> é de: <strong>${euro.toFixed(2)}€</strong>`
    } else if (moeda[2].checked) {
        res010.innerHTML = `A quantidade de dinheiro que você tem em <strong>Libra</strong> é de: <strong>${libra.toFixed(2)}£</strong>`
    } else {
        res010.innerHTML = `A quantidade de dinheiro que você tem em <strong>Bitcoin</strong> é de: <strong>${bitcoin.toFixed(5)}BTC</strong>`
    }
    
}

//EXERCICIO 11

function calcular011() {
    let largura = document.getElementById('numeroum011')
    let altura = document.getElementById('numerodois011')
    let res011 = document.getElementById('resultado011')
    let area = Number(largura.value) * Number(altura.value)
    
        res011.innerHTML += `Sua parede tem a dimensão de ${Number(largura.value)}x${Number(altura.value)} e sua área é de ${area}m² <br>`
        res011.innerHTML += `Para pintar essa parede, você precisará de ${area / 2}l de tinta`
    
}

//EXERCICIO 12

function calcular012() {
    let produto012 = document.getElementById('numero012')
    let res012 = document.getElementById('resultado012')
    let desconto012 = Number(produto012.value) * (5 / 100)
    let total12 = Number(produto012.value) - Number(desconto12.value)
    res012.innerHTML = `O produto que custava R$${Number(produto012.value)}, na promoção com desconto de 5% vai custar R$${total12}`
}