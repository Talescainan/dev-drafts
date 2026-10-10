const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Pergunta ao usuário a temperatura em Celsius
rl.question("Qual a temperatura em Celsius que você deseja converter?", (resposta1) => {
    // Converte a resposta para número, substituindo vírgula por ponto
     const celsius = Number(resposta1.replace(',', '.'))

    // Verifica se a resposta é um número válido
     if (resposta1.trim() === '' || isNaN(celsius)) {
        console.log('[ERRO] Você não digitou um número válido!')
    
    // Converte a temperatura para Fahrenheit e exibe o resultado
} else {
    const fahrenheit = (celsius * 9/5) + 32
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(1)}°F`)
}

rl.close()

})