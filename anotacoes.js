console.log("Hello World!");



console.log("Conversão de tipos");
console.log("2" + "2"); // 22
console.log(parseInt("2") + parseInt("2")); // 4
console.log("10" / "2"); // 5
console.log("Antônio" / 2); // NaN - Not a Number
console.log(6.5); // 6.5
console.log(6, 5); // 6 5



console.log("Atribuição de variáveis");
const idade = 22;
// Forma não recomendade de realizar declaração de variáveis ---> idade = 22;
// Diferença entre variáveis declaradas utilizando let e var:
//      * let ---> variáveis a nível de bloco;
//      * var ---> variáveis a nível de função ou global;
var nome = "Antônio Claudio";
const sobrenome = " Ferreira Filho";
nome += sobrenome; // nome = nome + sobrenome;
console.log(nome, "tem", idade, "anos"); // Antônio Claudio Ferreira Filho tem 22 anos
console.log(nome + " tem " + idade + " anos"); // Antônio Claudio Ferreira Filho tem 22 anos
console.log(`${nome} tem ${idade} anos`); // Antônio Claudio Ferreira Filho tem 22 anos



console.log("Listas");
var listaDeDestinos = ["Salvador", "São Paulo", "Rio de Janeiro"];
console.log(listaDeDestinos); // ["Salvador", "São Paulo", "Rio de Janeiro"]
listaDeDestinos.push("Brasília");
console.log(listaDeDestinos); // ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"]
var indexElementoSerRemovido = listaDeDestinos.indexOf("São Paulo");
console.log(indexElementoSerRemovido);
listaDeDestinos.splice(indexElementoSerRemovido, 1);
console.log(listaDeDestinos); // ["Salvador", "Rio de Janeiro", "Brasília"]
console.log(listaDeDestinos[0]); // Salvador

const filmes = new Array(
    "Harry Potter e o Prisioneiro de Azkaban",
    "Vingadores - Ultimato",
    "Superman",
);
filmes.push("Star Wars - O despertar da força");
console.log(filmes);



console.log("Condicionais")
var idadeComprador = 20;
var estaAcompanhado = false;
var passagemComprada = false;
var possiveisDestinosDeViagem = ["Rio de Janeiro", "Madrid", "Orlando", "Salvador"];

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade!");
//     selecaoDestinoViagem();
// } else if (estaAcompanhado) {
//     console.log("Comprador menor de idade acompanhado!");
//     selecaoDestinoViagem();
// } else {
//     console.log("Comprador não é maior de idade e está desacompanhado!");
// }
if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Comprador maior de idade ou acompanhado!");
    selecaoDestinoViagem();
} else {
    console.log("Comprador não é maior de idade e está desacompanhado!");
}
console.log(`Listagem de destinos disponíveis: ${possiveisDestinosDeViagem}`);

if (idadeComprador >= 18 || estaAcompanhado && passagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Infelizmente, você não pode embarcar!");
}

function selecaoDestinoViagem() {
    let selecaoDestinoUsuario = "Curitiba";
    let indexDestinoSelecionado = possiveisDestinosDeViagem.indexOf(selecaoDestinoUsuario);
    if (indexDestinoSelecionado != -1) {
        possiveisDestinosDeViagem.splice(indexDestinoSelecionado, 1);
        passagemComprada = true;
        console.log("Destino selecionado com sucesso!");
    } else {
        console.log("Destino não disponível!");
    }
}



console.log("Laços de repetição - While e for")
let contador = 0;
let destinoEhPossivel = false;
let selecaoDestinoUsuario = "Brasília";
// while (contador < possiveisDestinosDeViagem.length) {
//     if (possiveisDestinosDeViagem[contador] == selecaoDestinoUsuario) {
//         destinoEhPossivel = true;
//         break;
//     } else {
//         contador++;
//     }
// }
for (let index = 0; index < possiveisDestinosDeViagem.length; index++) {
    if (possiveisDestinosDeViagem[index] == selecaoDestinoUsuario) {
        destinoEhPossivel = true;
        break;
    }
}

destinoEhPossivel
    ? console.log(`${selecaoDestinoUsuario} está entre os destinos possíveis!`)
    : console.log(`${selecaoDestinoUsuario} não está entre os destinos possíveis!`);