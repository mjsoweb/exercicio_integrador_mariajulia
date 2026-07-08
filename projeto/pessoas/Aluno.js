// Arquivo: projeto/pessoas/Aluno.js

// Importamos a classe Pessoa (que está na mesma pasta)
const Pessoa = require('./Pessoa');

// Importamos a biblioteca de utilitários (subindo duas pastas para ir até a raiz)
const util = require('../biblioteca/util');

// A palavra 'extends' faz a classe Aluno herdar tudo de Pessoa
class Aluno extends Pessoa {
  #matricula; // Atributo privado específico do Aluno

  // O construtor é opcional se você não for passar parâmetros na criação,
  // mas é bom conhecer. Se usar, precisa chamar o super() para inicializar a classe mãe.
  constructor() {
    super();
  }

  // Método para alterar a matrícula com validação
  setMatricula(matricula) {
    // Utiliza a biblioteca para validar a matrícula
    if (util.validarMatricula(matricula)) {
      this.#matricula = matricula;
      return true; // Retorna true se for válida e alterada
    } else {
      return false; // Retorna false se a validação falhar
    }
  }

  // Método para buscar a matrícula privada
  getMatricula() {
    return this.#matricula;
  }
}

// Exportamos a classe Aluno para que possa ser usada em outros arquivos
module.exports = Aluno;
