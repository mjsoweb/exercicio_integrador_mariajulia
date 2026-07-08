// Arquivo: projeto/pessoas/Professor.js

// Importamos a classe mãe Pessoa (na mesma pasta)
const Pessoa = require('./Pessoa');

// A classe Professor herda tudo de Pessoa
class Professor extends Pessoa {
  #disciplina; // Atributo privado específico do Professor

  constructor() {
    super(); // Inicializa a classe mãe Pessoa
  }

  // 1. Métodos da Disciplina (Padrão)
  setDisciplina(disciplina) {
    if (disciplina) {
      this.#disciplina = disciplina;
      return true;
    }
    return false;
  }

  getDisciplina() {
    return this.#disciplina;
  }

  // 2. Sobrescrevendo o método setEmail()
  setEmail(email) {
    // Regra do professor: precisa terminar com ".edu.br"
    // Usamos o método .endsWith() do JavaScript para checar o final do texto
    if (email.endsWith('.edu.br')) {
      // Se passar na nossa regra, chamamos o setEmail da classe mãe (Pessoa)
      // para que ela faça a validação da biblioteca e grave o dado se estiver correto
      return super.setEmail(email);
    } else {
      // Se não terminar com .edu.br, já recusa direto
      return false;
    }
  }
}

// Exportamos a classe Professor
module.exports = Professor;
