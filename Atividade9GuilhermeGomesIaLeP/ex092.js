const ParouImpar = (num) => num % 2 == 0 ? document.write(`${num} é par.`) : document.write(`${num} é impar.`)
ParouImpar(Number(prompt('Informe um número:')))