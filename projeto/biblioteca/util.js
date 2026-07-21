// Arquivo criado na pasta projeto

//cada função deverá retornar apenas true ou false

//  valida se eo email tem o símbolo "@"

// biblioteca/util.js

// Validação de E-mail (Com Desafio Extra 1: precisa ter '@' e terminar com .com ou .edu.br)
function validarEmail(email) {
    if (!email) return false;
    const emailStr = String(email).trim();
    const temArroba = emailStr.includes("@");
    const terminaComValido = emailStr.endsWith(".com") || emailStr.endsWith(".edu.br");
    
    return temArroba && terminaComValido;
}

// Validação de Matrícula (Mínimo de 6 caracteres)
function validarMatricula(matricula) {
    if (!matricula) return false;
    const matStr = String(matricula).trim();
    return matStr.length >= 6;
}

// Validação simples de CPF (Apenas checa se tem conteúdo e tamanho básico, ex: 11 dígitos)
function validarCPF(cpf) {
    if (!cpf) return false;
    const cpfStr = String(cpf).trim();
    return cpfStr.length >= 11;
}

module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF
};
