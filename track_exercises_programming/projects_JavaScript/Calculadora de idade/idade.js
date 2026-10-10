const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var data = new Date()
var ano = data.getFullYear()

rl.question("Qual o ano do seu nascimento?", (resposta1) => {
    let nasc = Number(resposta1)

if (nasc > ano) {
    console.log('[ERRO] Seu ano de nascimento é inválido! Tente novamente.')
} else {
    let idade = ano - nasc
    console.log(`Aqui está o resultado: ${idade}`)
}

rl.close()

})