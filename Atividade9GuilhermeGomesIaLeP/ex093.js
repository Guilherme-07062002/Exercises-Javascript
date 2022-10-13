const Contador = (inicio, fim, incremento) => {
    document.write(`Para os valores de inicio (${inicio}), fim (${fim}), incremento (${incremento}), teremos:<br>Contador(${inicio}, ${fim}, ${incremento})<br>`)
    for (let i = inicio; i <= fim; i += incremento) {
        document.write(`${i} >> `)
    }
    document.write(`FIM`)
}
Contador(Number(prompt('Informe aonde começa:')), Number(prompt('Informe aonde termina:')), Number(prompt('Informe o incremento:')))