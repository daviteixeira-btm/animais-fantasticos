 // 7 Tipos de Dados

 //Todos são primitivos exceto os objetos.

 var nome = "Davi"; // String
 var idade = 24; // Number
 var possuiFaculdade = true; // Boolean
 var time; // Undefined
 var comida = null; // Null
 var simbolo = Symbol() // Symbol
 var novoObjeto = {} // Object

 // Primitivos são dados imutáveis.

 // para identificar que tipo de dados temos em uma variável usamos o typeof()

 console.log(typeof(nome))

 // Template String

 // Você deve passar expressões/variáveis dentro de ${}

 var gols = 1000;
 var frase1 = 'Romário fez ' + gols + ' gols';
 var frase2 = `Romário fez ${gols} gols`; // Utilizando Template Strings

 console.log(frase1)
 console.log(frase2)