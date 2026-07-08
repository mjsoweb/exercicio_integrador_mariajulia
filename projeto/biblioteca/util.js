// Arquivo criado na pasta projeto

//cada função deverá retornar apenas true ou false

//  valida se eo email tem o símbolo "@"

function validarEmail(email) {
  // 1. Primeiro, checa se o e-mail tem o "@"
  const temArroba = email.includes('@');

  // 2. Depois, checa se ele termina com ".com" OU ".edu.br"
  const terminaCorreto = email.endsWith('.com') || email.endsWith('.edu.br');

  // 3. O e-mail só é válido se as DUAS condições forem verdadeiras
  if (temArroba && terminaCorreto) {
    return true;
  } else {
    return false;
  }
}

//  matrícula correta para o teste é "202610"
function validarMatricula(matricula) {
  if (matricula === '202610') {
    return true;
  } else {
    return false;
  }
}

// o CPF precisa ter exatamente 11 dígitos numéricos
function validarCPF(cpf) {
  if (cpf.length === 11) {
    return true;
  } else {
    return false;
  }
}

// --- EXEMPLO DE USO ---

console.log('E-mail válido?', validarEmail('teste@email.com')); // Deve retornar true
console.log('Matrícula válida?', validarMatricula('00000')); // Deve retornar false (pois não é "202610")
console.log('CPF válido?', validarCPF('12345678901')); // Deve retornar true (tem 11 caracteres)
