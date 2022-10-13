let nome = prompt('Informe nome do funcionário:')
let salario = Number(prompt('Informe salário do funcionário:'))
let anos = Number(prompt('Informe a quantos anos o funcionário trabalha:'))
if (salario > 0 && anos >= 0) {
    document.write(`Funcionário: ${nome}<br>
    Salário R$${salario.toFixed(2)}<br>
    tempo de trabalho ${anos} anos.<br>`)
    if (anos < 3) {
        document.write(`Aumento de 3%<br>Salário Novo:R$ ${(salario + (salario * 0.03)).toFixed(2)}`)
    } else if (anos >= 3 && anos < 10) {
        document.write(`Aumento de 12,5%<br>Salário Novo:R$ ${(salario + (salario * 0.125)).toFixed(2)}`)
    } else {
        document.write(`Aumento de 20%<br>Salário Novo:R$ ${(salario + (salario * 0.20)).toFixed(2)}`)
    }
} else {
    document.write('Algum valor informado é inválido.')
}