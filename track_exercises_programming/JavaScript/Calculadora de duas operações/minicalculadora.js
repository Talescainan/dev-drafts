let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite outro número: "))

let soma = n1 + n2
let multiplicar = n1 * n2

let operador = Number(prompt("Escolha: 1 para soma ou 2 para multiplicação: "))

if (operador == 1) {
    alert(`Resultado: ${soma}`)
} else if (operador == 2) {
    alert(`Resultado: ${multiplicar}`)
}