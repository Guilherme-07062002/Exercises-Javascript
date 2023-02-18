let valorCasa = Number(prompt('Informe o valor da casa:'))
let salarioComprador = Number(prompt('Informe o salário do comprador:'))
let anosPagando = Number(prompt('Informe a quantidade de anos pagando:'))
if (valorCasa > 0 && salarioComprador > 0 && anosPagando > 0) {
    let prestacao = valorCasa / (anosPagando * 12)
    document.write(`Dados:<br>
Valor da casa: R$ ${valorCasa.toFixed(2)}<br>
Salário do comprador: R$ ${salarioComprador.toFixed(2)} <br>
Tempo pagando: ${anosPagando} ano(s).<br>
Prestação mensal: R$ ${prestacao.toFixed(2)}<br>`)
    if (prestacao < (salarioComprador * 0.30)) {
        document.write('O valor da prestação é menor que 30% do salário do comprador.')
    } else {
        document.write('EMPRÉSTIMO NEGADO<br>O valor da prestação é maior que 30% do salário do comprador.')
    }
} else {
    document.write('Algum valor informado está incorreto.')
}