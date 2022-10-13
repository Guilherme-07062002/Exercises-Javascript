let peso = Number(prompt('Informe peso em Kg:'))
let altura = Number(prompt('Informe altura ex:(1.70):'))
if(peso > 0 && altura > 0){
    let imc = peso / altura ** 2
    document.write(`Dados do usuário:<br>
    -Peso: ${peso}Kg<br>
    -Altura: ${altura}m<br>
    -IMC: ${imc.toFixed(1)}<br>`)
    if(imc < 18.5){
        document.write('Abaixo do peso.')
    }else if(imc >= 18.5 && imc < 25){
        document.write('Peso Ideal.')
    }else if(imc >= 25 && imc < 30){
        document.write('Sobrepeso.')
    }else if(imc >= 30 && imc < 40){
        document.write('Obesidade.')
    }else{
        document.write('Obesidade Mórbida.')
    }
}else{
    document.write('Valor Inválido.')
}