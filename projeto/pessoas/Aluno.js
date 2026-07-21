// Arquivo: projeto/pessoas/Aluno.js

// pessoas/Aluno.js
const Pessoa = require('./Pessoa');
const util = require('../biblioteca/util');

class Aluno extends Pessoa {
    #matricula;

    constructor() {
        super();
        this.#matricula = "";
    }

    getMatricula() {
        return this.#matricula;
    }

    setMatricula(matricula) {
        // Validação usando a biblioteca util.js
        if (util.validarMatricula(matricula)) {
            this.#matricula = matricula;
            return true;
        }
        return false;
    }
}

 

// Exportamos a classe Aluno para que possa ser usada em outros arquivos
module.exports = Aluno;
