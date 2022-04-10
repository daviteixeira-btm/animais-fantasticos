// Números

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

console.log(exp)

// Precisão para até 15 digitos

// Operadores Aritméticos

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

// Lembrando que soma + em Strings serve para concatenar

// Operdores Aritméticos (Strings)
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicação = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//É possível verificar se uma variável é NaN ou não com a fução isNaN()

//Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); // 6

// Mesma coisa para o decremento --x

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo