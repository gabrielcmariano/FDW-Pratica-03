var logaritimando, base, resp;

logaritimando = prompt ("Informe o valor do Logaritimando(b): ");
    if (logaritimando == 0)
        alert ("Não é possível resolver a equação");
    if (logaritimando < 0)
        alert ("Não é possível resolver a equação");
    else {
        base = prompt ("Informe o valor da Base(x): ");
        if (base == 0)
            alert ("Não é possível resolver a equação");
        if (base < 0) {
            alert ("Não é possível resolver a equação");
        }
        if (base == 1) {
            document.write ("O log de b na base x é: 1 ");
        }
        else {
            resp= Math.log(logaritimando) / Math.log (base);
            document.write ("O log de 'b' na base 'x': " + (resp));
    }
    }
