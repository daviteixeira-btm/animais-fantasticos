// Boolean 

// Existem dois valores booleanos false ou true

var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else

// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

var possuiGraduacao = true;

if(possuiGraduacao){
    console.log('Possui graduação');
}else{
    console.log('Não possui graduação');
}

// retorna Possui Graduação e não execulta o else

// O valor dentro dos parênteses sempre será avaliado em false ou true.

// Truthy e Falsy

// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// False
/*
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
*/

// Todo resto é truthy
/*
if(true)
if(1)
if(' ')
if('davi')
if(-5)
if({})
*/

// Operador Lógico de Negação !

// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
/* 
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
*/

// Dica, voc~e pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de comparação

// Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o
// tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10' // false
10 !== '10' // true

// Operadores Lógicos &&

// && Compara se uma expressão e a outra é verdadeira
// Sempre retorna o último valor verdadeiro ou o primeiro falso que aparecer

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true ele irá retornar o último valor verificado.
// Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.

// Operadores Lógicos ||

// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// Retorna o primeiro valor true que encontrar

// Switvh

/* Com o switvh você pode verificar se uma variável é igual à diferentes valores utilizando o case.
Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a 
continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira. */

var corFavorita = 'Azul';

switch (corFavorita){
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos.');
}