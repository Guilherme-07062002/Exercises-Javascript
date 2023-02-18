let anoNascimento = parseInt(prompt('Exercício 22 - Leia o ano de nascimento de um rapaz e mostre sua situação em relação ao alistamento militar\n- Se estiver antes dos 18, mostre quantos anos faltam para o alistamento.\n- Se estiver depois dos 18, mostre quantos anos já se passaram do alistamento.\n\nInforme ano de nascimento do usuário:'))
let idade = 2022 - anoNascimento
if (idade > 0) {
    if (idade < 18) {
        document.write(`O usuário possui ${idade} anos de idade<br>Portanto, ainda falta(m) ${18 - idade} ano(s) para ele se alistar.`)
    } else if (idade == 18) {
        document.write(`Usuário possui 18 anos e já deve fazer o seu alistamento.`)
    } else {
        document.write(`Usuário tem ${idade} anos de idade<br>Portanto já se passou ${idade - 18} ano(s) do seu alistamento.`)
    }
} else {
    document.write(`Idade Inválida.`)
}