var raio= prompt("Digite o valor do raio da esfera")

var volume= parseInt( 4 / 3 * Math.PI * Math.pow (raio, 3))


if (raio <= 0) {
    alert ("O valor precisa ser maior que 0")
    document.write ("O resultado não percence a Reais")
}
if (raio > 0) 
    document.write("O volume da esfera de 'Raio " +(raio) +"' = "+(volume))
