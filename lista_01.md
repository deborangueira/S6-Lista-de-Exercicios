
# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

RESPOSTA
Alternativa correta: letra "a"
Justificativa: O resultado é primeiro undefined pois mesmo que a variável "var" é reconhecida fora do escopo, o valor de x não segue essa lógica e, ao vim abaixo do console.log(), não é identificado como sendo uma atribuição a variável. No que se refere ao "let", o resultado é undefined pois nem a variável nem o valor podem ser acessadas fora do escopo.


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

Alternativa correta: letra "a"
Justificativa:  considerando que o objetivo é que o código exiba “Erro: número inválido ” no caso de “a” ou “b” serem iguais a zero devemos corrigir o código. Da forma que está , qualquer valor que entrar em “a” definirá a função como true pois só o “b” foi escrito de forma que a condição para ele seja ser igual a zero. Utilizando o “ a === 0 || b ===0”, entende-se que no caso de a ser zero ou b ser zero, o console deve exibir a mensagem de texto definida em return. 
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

RESPOSTA:
Alternativa correta: b
Justificativa: A função calcularPreço é executada utilizando a variável "eletrônico", a ideia seria que fosse exibido o preço de 1000 referente ao eletrônico, contudo o console.log exibe o valor da última variável posicionada antes da interrupção que é definida por "break", sendo ela, portanto, a variável "vestuário" de preço 200.
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24

RESPOSTA:
Alternativa correta: d
Justificativa: O array que foi guardado na variável "número" é utilizado dentro na variável resultado, contudo, esses números sofrem manipulação e seleção. Através o ".map" todos os números sofrem multiplicação por dois, depois são filtrados todos aqueles acima de 5 por meio do ".filter". Em seguida, por meio do "reduce", os números são somados seguindo a seguinte lógica: 0 + o primeiro número da lista, depois o resultado com o segundo número da lista e assim por diante até o último ítem.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

 Nesse sentido, o primeiro número indica a partir de qual índice se quer remover

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

RESPOSTA:
Alternativa correta - Letra "c".
Justificativa - o "splice" altera o conteúdo de uma lista, nesse sentido, ele adiciona elementos enquanto remove outros. Nessa questão, foi removido os itens da posição 1 e 2, e em seus lugares foram postos os ítens "abacaxi" e "manga" respectivamente. Ou seja, os ítens das extremidades foram mantidos (posição 0 e 3) e os do centro foram trocados.
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.
  
a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

RESPOSTA:
Alternativa correta - Letra "a".
Justificativa - A herança é uma característica da programação orientada a objetos, e funciona da forma que está escrito no ítem a. Nesse sentido, para que determinada classe herde um conjunto de métodos e propriedades de outra, a chamada deve ser feita com a palavra "extends". Na frase abaixo, por exemplo, estamos dizendo que a classe herda todos os métodos e propriedades do framework do phaser e, assim, o programador poderá utilizar vários recursos dela, como as funções: "class cenaJogo extends Phaser.Scene {}"
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

RESPOSTA:
Alternativa correta - Letra "a".
Justificativa - A afirmação I é verdadeira pois no código foi incluído os trexos de código: "extends Pessoa" e "super(nome, idade)". Também é verdadeira a afirmação II, e nesse caso a adição de um novo método "apresentar()" redefiniu o original e, portanto, o sobrescreveu . A terceira é falsa, pois o JavaScript é uma linguagem que permite programação orientada a objetos.

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

RESPOSTA:
Alternativa correta - Letra "b".
Justificativa - A "asserção" está correta pois, em POO, podemos definir respostas diferentes para um mesmo método que está sendo usado em diferentes classes. A "razão", por sua vez, está incorreta pois, em javaScript, o último método sempre sobrecreve os anteriores e, por isso, não é possível que o mesmo método gere respostas diferentes para cada objeto diferente que utiliza-o.
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

RESPOSTA:
```javascript

function somaArray(numeros) {

    let soma = 0; // declaração da variável soma e número de inicio

    for (let i = 0; i < numeros.length; i++) { // adicionei a variável let antes de "i" e, alterei "size" para "length" que é a forma que o JS quantifica o tamanho de um array
        soma += 2*numeros[i]; // adicionei o + antes do sinal de =, assim os números resultantes dessa operação vão sendo somados entre si
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

RESPOSTA:
Explicação: a herança ocorre por meio do uso do "extends" na linha onde criei a classe livro, seguido pelo "super" que chama o construtor da classe pai. Além disso, a modificação do método na classe "Livro" foi realizada no método "calcularDesconto" por meio de uma sobrescrita.
Código:
```javascript
class Produto {
    constructor(nome, preco) {
        this.nome ;
        this.preco ;
    }

    calcularDesconto(){
        return this.preco *0.9;
    }
}

class Livro extends Produto {
    constructor(nome, preco) {
        super(nome, preco); // Chama o construtor da classe pai
    }

    calcularDesconto(){
        return this.preco *0.8;
    }
}
```