let salario = 0, resp = '', sexo = '', cont = 1, totalSalarioH = 0,totalSalarioM = 0
do {
    salario = Number(prompt('Digite salário do funcionário:'))
    if (salario > 0) {
        sexo = prompt('Informe sexo do funcionário:[F/M]').toUpperCase()
        if (sexo == 'M' || sexo == 'F') {
            switch(sexo){
                case 'F':
                    totalSalarioM ++
                    break
                case 'M':
                    totalSalarioH ++
                    break
            }
            document.write(`Funcionário ${cont} - Salário: R$${salario.toFixed(2)} / sexo: ${sexo}<br>`)
            resp = prompt('Deseja continuar? (S/N):').toUpperCase()
            cont++
            if (resp != 'S' && resp != 'N') {
                alert('Valor Inválido.')
                cont--
            }
        } else {
            alert('Valor Inválido.')
        }
    } else {
        alert('Valor Inválido.')
    }
} while (resp != 'N')
document.write(`<br>Dados:<br>
Total de salários pago aos homens: ${totalSalarioH}<br>
Total de salários pago as mulheres: ${totalSalarioM}<br>`)