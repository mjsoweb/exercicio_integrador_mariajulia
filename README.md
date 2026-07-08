# Exercício Integrador 01 -- Sistema Acadêmico -- Maria Júlia Santos Oliveira

Link do projeto ---> [StackBlitz⚡️](https://stackblitz.com/~/github.com/mjsoweb/Exerc-cio-Integrador-01----Sistema-Acad-mico)


<h2>📌 Questões Teóricas</h2>

<h4>1. Qual a diferença entre módulo e classe?</h4>

O módulo representa as funcionalidades do projeto e a classe é onde se produz coisas novas.

<h4>2. Por que utilizar encapsulamento?</h4>
   
<p> O encapsulamento garante a proteção dos atributos privados da classe criada, deixando o acesso somente por métodos públicos. Portanto, implementar essa ferramenta no código faz com que a visibilidade e os detalhes sejam controlados e evita alterações indevidas.</p>


<h4>3. Qual a vantagem de reutilizar funções em uma biblioteca?</h4>

A principal vantagem é ter um código limpo. A padronização ajuda na manutenção se ocorrer erros ao longo do processo. O código se torna de fácil entendimento por ficar organizado.


<h4>4.Para que serve super?</h4>

A palavra-chave "super" permite acessar a implementação original da classe base inicial que deu origem a outras. Além disso, ela executa o método da classe durante a sobrescrita.

<h4>6. Qual a diferença entre herança e sobrescrita?</h4>

* A herança é uma representação de uma especialização de outra classe. Ou seja, com a herança é possível utilizar métodos de diversas classes.

* A sobrescrita é a alteração de um método herdado existente dentro de uma classe adicionando novos critérios. O objetivo é reaproveitar ao máximo o que já existe dentro da base.

<h4>7. Por que a validação do e-mail deve ocorrer dentro de setEmail() utilizando a biblioteca?</h4>

Porque o encapsulamento ocorre por métodos set e get, isso garante o acesso aos atributos de forma controlada.

<h4> 8. Em quais situações utilizar <b>&& e ||</b>?</h4>

* O símbolo "&&" representa o  "E", "AND" na lógica de programação, ele deve ser utilizado quando existem condições obrigatórias a serem respeitadas ao mesmo tempo. Por exemplo:
- se a matrícula tiver 8 caracteres e terminar com "26", retorne true...

*Já o símbolo de "||" representa o "OU", "OR" na lógica de programação. A principal diferença entre ele e o "AND" é que apenas uma condição precisa ser verdadeira para que se torne verdade. Por exemplo:
- se a idade for menor do que 12 e maior ou igual a 60, retorne true...
