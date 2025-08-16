// criando variáveis
const nome = "Kaio"
const peso = 70
const altura = 1.68

// criando a função
function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

// chamando a função
const imc = calcularIMC(peso, altura)

// mostrando o resultado
console.log(`${nome} tem IMC de ${imc.toFixed(2)}`)
