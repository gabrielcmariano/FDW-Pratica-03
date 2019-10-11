var c, i,t,periodo, montante

var c = prompt("Digite um valor para o Capital Inicial (C)")
var i = prompt("Digite um valor para a taxa de juros (i) sem o % ")
var t = prompt("Digite um valor para o tempo(t)")
var periodo = prompt("Digite qual marcação temporal Ex: dias, meses, anos")

var montante = parseInt(c * Math.pow( 1 + i/100, t))

if (c <= 0) {
    alert("O Capital Inicial precisa ser maior que zero")
}
if (i <= 0) {
    alert("A taxa de juros precisar ser maior que zero")
}
    else  {
        document.write(`<div class='format'> Capital Inicial = R$${c},00</div>`)
        document.write(`<div class='format'> Taxa de Juros = ${i}%</div>`)
        document.write(`<div class='format'> Tempo = ${t} ${periodo} </div>`)
        document.write(`<div class='format'> O Montante final é aproximadamente = R$${montante},00 </div> `)
    }


