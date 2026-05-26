const prompt = require('prompt-sync')()


// 1
let nome = prompt("nome: ")
let idade = prompt("idade: ")
let cidade = prompt("cidade: ")

console.log("ola meu nome e " + nome + " tenho " + idade + " anos e sou de " + cidade)


// 2
let a = Number(prompt("numero 1: "))
let b = Number(prompt("numero 2: "))

console.log(a + b)
console.log(a - b)
console.log(a * b)

if(b == 0){
    console.log("erro")
}else{
    console.log(a / b)
}


// 3
let soma = 0

for(let i = 0; i < 5; i++){
    soma = soma + Number(prompt("nota: "))
}

let media = soma / 5

console.log(media)

if(media >= 7){
    console.log("aprovado")
}else if(media >= 5){
    console.log("recuperacao")
}else{
    console.log("reprovado")
}


// 4
let n = Number(prompt("numero: "))

for(let i = 1; i <= 10; i++){
    console.log(n + " x " + i + " = " + (n * i))
}


// 5
let par = 0
let impar = 0

for(let i = 0; i < 10; i++){

    let num = Number(prompt("numero: "))

    if(num % 2 == 0){
        par++
    }else{
        impar++
    }
}

console.log("pares " + par)
console.log("impares " + impar)


// 6
let secreto = 42
let tentativas = 0

while(true){

    let chute = Number(prompt("chute: "))

    tentativas++

    if(chute == secreto){
        console.log("acertou")
        console.log(tentativas)
        break
    }

    if(chute < secreto){
        console.log("maior")
    }else{
        console.log("menor")
    }}