// Escopo de Função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro(){
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Escopo evita o conflito entre nomes.

//Variável Global (Erro)

/* Declarar variáveis sem a palavra chave var, const ou let, cria
uma variável que pode ser acessar em qualquer escopo(global). Isso é um erro. */

'use strict'
// 'use strict' impede isso

// Escopo de Bloco

/* Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6
a melhor forma de declaramos uma variável é utilizando const e let, pois estas 
respeitam o escopo de bloco. */

// Const e Let no lugar de Var
