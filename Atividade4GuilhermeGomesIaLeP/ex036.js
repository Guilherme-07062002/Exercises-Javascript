let horas = Number(prompt('Informe a quantidade de horas de atividade no mês:'))
if (horas > 0) {
    let pontos = 0
    if (horas < 10) {
        //2 pontos por hora
        pontos = 2 * horas
    } else if (horas >= 10 && horas < 20) {
        //5 pontos por hora
        pontos = 5 * horas
    } else {
        //10 pontos por hora
        pontos = 10 * horas
    }
    document.write(`Dados:<br>
    Horas Trabalhadas: ${horas} horas<br>
    Total de pontos: ${pontos} pontos<br>
    Conseguiu obter: R$ ${(pontos * 0.5).toFixed(2)}`)
} else {
    document.write('Valor Inválido.')
}