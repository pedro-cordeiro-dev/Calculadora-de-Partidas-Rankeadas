function QuantidadeVitorias (vitorias, derrotas){

    return vitorias - derrotas;


}

let saldoVitorias = QuantidadeVitorias(100, 12)

    if(saldoVitorias < 10){

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel ferro`)

    } else if(saldoVitorias > 10 && saldoVitorias <= 20){

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel bronze`)

    } else if(saldoVitorias > 20 && saldoVitorias <= 50){

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel prata`)

    } else if(saldoVitorias > 50 && saldoVitorias <= 80){

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel ouro`)

    } else if(saldoVitorias > 80 && saldoVitorias <= 90){

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel diamante`)

    } else if(saldoVitorias > 90 && saldoVitorias <= 100){

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel lendario`)

    } else if(saldoVitorias > 100) {

        console.log(`O Heroi tem de saldo de ${saldoVitorias} vitorias, portanto esta no nivel imortal`)

    }