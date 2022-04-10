// Variáveis são responsáveis por guardar dados na memória. 
// Inicia com a palavra var, let ou const

var nome = 'Davi';
var idade = 24;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade)

// Elas evitam repetições, DRY (Don't repeat yourself)

// Tabém é possivel criar mais de uma variável, sem repetir a palavra chave var usando vírcula.

var 
    nome = 'Davi Teixeira', 
    idade = 24, 
    possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade)

// pode declarar ela e não atribuir valor inicialmente.

// É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível
// modificar valores das declaradas com const

//Ecercíico

// Declarar uma variável com o seu nome
var nome = 'aline';

// Declarar uma variável com sua idade
var idade = 21;

//Declarar uma variável com sua comida favorita e não atribuir valor
var comida;

// Atribuir valor a sua comida favorita
comida = 'bolo';

// Declarar 5 variáveis diferenes sem valores
var a, b, c, d, e;

console.log(nome, idade, comida, a, b, c, d, e);
