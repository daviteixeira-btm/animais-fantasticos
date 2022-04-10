// Objetos

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Davi',
    idade: 24,
    profissao: 'Front-end',
    possuiFaculdade: false,
}

pessoa.nome; // 'Davi'
pessoa.possuiFaculdade; // false

// Propriedades e métodos consistem em nome (chave) e valor.

// Métodos

// É uma propriedade que possui uma função no loal do seu valor.

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Abreviação de area: function(){} para area(){}, no ES6+

var quadrado = {
    lados: 4,
    area (lado){
        return lado * lado;
    },
    perimetro (lado){
        return this.lados * lado;
    },
}

// Para que serve um objeto? Cerve para Organizar o Código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

/* Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método? */

// Protótipo e Herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
    width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

// hasOwnProperty é um método de Object

// Tudo é Objeto
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

// Elementos do DOM

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function(){
    console.log('Clicou')
})

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.