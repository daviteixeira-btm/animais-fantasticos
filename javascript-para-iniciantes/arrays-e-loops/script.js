// Array 

/* É um grupo de valores geralmente relacionados. Servem para guardarmos 
diferentes valores em uma única variável.*/

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0] // Switch
videoGames[2] // Xbox

// Acesse um elemento da array utilizando [n]

// Métodos e Propriedades de uma Array

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// Esistem diversos outros métodos, como map, reduce, forEach e mais veremos mais tarde.

// For Loop

// Fazem algo repetidamente até que uma condição seja atingida.

for(var numero = 0; nuumero < 10; numero++){
    console.log(numero)
}

// Retorna de 0 a 9 no console

// O for loop possui 3 partes, início, condição e incremento

// While Loop

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// Retorrna de 0 a 9 no console
// O for loop é o mais comum

// Arrays e Loops
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for(var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
}

// Break
// O loop irá parar caso encontre a palavra break
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for(var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4'){
        break;
    }
}

// forEach
/* for Each é um método que executa uma função para cada item da Array.
É uma forma mais simples de utilizarmos um loop com arrays(ou array-like) */
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
videoGames.forEach(function(item){
    console.log(item);
});
// O argumento item será atribuído dinamicamente

// Podemos passar os seguintes parâmetros item, idenx e array