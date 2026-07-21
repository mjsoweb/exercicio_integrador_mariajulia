// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais
// pessoas/Pessoa.js
const util = require('../biblioteca/util');

class Pessoa {
    #nome;
    #email;

    constructor() {
        this.#nome = "";
        this.#email = "";
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        if (nome && nome.trim() !== "") {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        // Utilizando a função de validação da biblioteca externa
        if (util.validarEmail(email)) {
            this.#email = email;
            return true;
        }
        return false;
    }
}

module.exports = Pessoa;
