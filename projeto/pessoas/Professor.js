// Arquivo: projeto/pessoas/Professor.js

// pessoas/Professor.js
const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
    #disciplina;

    constructor() {
        super();
        this.#disciplina = "";
    }

    getDisciplina() {
        return this.#disciplina;
    }

    setDisciplina(disciplina) {
        if (disciplina && disciplina.trim() !== "") {
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }

    // Sobrescrita de método (Override) exigindo .edu.br para professores
    setEmail(email) {
        if (email && String(email).trim().endsWith(".edu.br")) {
            // Reutilizando o método da classe pai (Pessoa) que valida o restante
            return super.setEmail(email);
        }
        return false;
    }
}

module.exports = Professor;
// Exportamos a classe Professor
module.exports = Professor;
