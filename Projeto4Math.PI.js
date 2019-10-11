var raio = prompt('Digite um valor positivo para o raio do círculo:')

var area = parseFloat( Math.PI * Math.pow (raio, 2)).toFixed(2)

    if (raio <= 0) {
    alert("Digite um número maior que 0")
    document.write ("O resultado não pertence aos Reais")
    }
        if (raio > 0) 
        document.write("A área do círculo calculada é " + (area) )
    
    
