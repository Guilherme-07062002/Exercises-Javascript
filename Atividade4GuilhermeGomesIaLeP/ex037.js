let salario = Number(prompt('Informe salário atual do funcionário:'))
let genero = prompt('Informe gênero do funcionário:[F/M]').toUpperCase()
let anos = Number(prompt('Informe a quantos anos esse funcionário trabalha na empresa:'))
if (salario > 0 && anos > 0 && (genero == 'M' || genero == 'F')) {
    document.write(`Dados:<br>
    Tempo trabalhando: ${anos} ano(s)<br>
    Salário anterior: R$ ${salario.toFixed(2)}<br>`)
    switch (genero) {
        case 'F':
            if (anos < 15) {
                //5%
                salario = salario + (salario * 0.05)
            } else if (anos >= 15 && anos < 20) {
                //12%
                salario = salario + (salario * 0.12)
            } else {
                //23%
                salario = salario + (salario * 0.23)
            }
            break
        case 'M':
            if (anos < 20) {
                //3%
                salario = salario + (salario * 0.03)
            } else if (anos >= 20 && anos < 30) {
                //13%
                salario = salario + (salario * 0.13)
            } else {
                //25%
                salario = salario + (salario * 0.25)
            }
            break
        default:
            document.write('Algo deu errado.')
            break
    }
    document.write(`Salário novo: R$ ${salario.toFixed(2)}`)
} else {
    document.write('Valor Inválido.')
}