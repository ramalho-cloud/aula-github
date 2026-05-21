//lista de exemplos de arrays

//criando um array
let frutas = ["maçã", "Banana", "laranja"];
console.log (frutas)//output: ["maçã", "bamnana", "laranja"]

//criando array de número
let numeros = [1,2,3,4,5];
console.log (numeros)//output: [1,2,3,4,5]


//acessando elementos do array
let carros = ["Fusca", "Gol", "Palio"];
console.log(carros[0])//output: Fusca
console.log(carros[1])//output: Gol

//alterando os elementos do array
let cores = ["vermelho", "verde", "azul"];
cores [1] = "amarelo";
console.log(cores)//output:["vermelho", "amarelo", "azul"]

//descobrindo o tamanho do array
let animais = ["cachorro", "gato", "coelho", "hamister", "papagaio", "peixe", "tartaruga", "cobra", "leão", "tigre"];
console.log(animais.length)//output: 10

//adicionando elementos ao array
let paises = ["Brasil", "Argentina", "Cilhe"];
paises.push("Uruguay");
console.log(paises)//output: "Brasil", "Argentina", "Cilhe", "Uruguay"]

//removendo o último elemento da array
let cidades = ["São Paulo", "Rio de Janeiro ", "Belo Horizonte"];
cidades.pop;
console.log(cidades)//output: ["São Paulo", "Rio de Janeiro "]

//adicionando elementos ao início da array
let cores_primarias = ["vermelho", "verde"];
cores_primarias.unshift ("azul");
console.log(cores_primarias)//output: ["vermelho", "verde", "azul"]

//removendo o primiero elemento da array
let frutas_citricas = ["limão ", "laranja", "tangerina"];
frutas_citricas.shift();
console.log(frutas_citricas)//output: ["laranja", "tangerina"]

//mostrando todos os elementos da array com o for
let animais_domesticos = ["Cachorro ", "gato", "hamister"]
for (let i =0 ; 1 < animais_domesticos.length; i++){
    console.log(animais_domesticos[i])
}
//output: 
//cachorro 
//gato
//hamister