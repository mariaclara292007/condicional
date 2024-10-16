//codicionais sao uma forma de tomar decisões, de fazer o computador executar essas decisões
//if significa "se"
//else significa "senão"
// if (condição) {codigo que será executado}
//prompt pergunta algo ao usuário
// sao como se fossem caixas e existem 3 tipo, var, let e const
//sempre que usamos dados textuais"""

// let nome = prompt("qual é o seu nome");

//alert usamos para exibir uma mensagem

// alert("seja bem vindo(a)," + nome);

// let idade = prompt("quantos anos você tem?");

// if(idade >= 18) {
//     alert("voçê ja pode tirar a carteira de motorista");
// }else{
//     alert("voçê ainda nao tem idade para dirigir")
// }
let gostarDePizza = prompt("voçê gosta de pizza? responda(sim ou não)");
//=== estritamente igual
if(gostarDePizza === "sim"){
    alert("que ótimo! vamos comer juntos?")
}else("tudo bem, talvez vc goste de outra comida");