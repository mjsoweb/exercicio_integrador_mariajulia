// Arquivo: projeto/main.js

// 1. Importamos as classes que você criou
const Pessoa = require('./pessoas/Pessoa.js');
const Aluno = require('./pessoas/Aluno.js');
const Professor = require('./pessoas/Professor.js');

// Criamos uma lista (array) para guardar todo mundo e facilitar o relatório depois
const instituicao = [];

console.log('=== INICIANDO CADASTROS ===\n');

// ==========================================
// 2. CADASTRO DE PESSOAS
// ==========================================
const pessoa1 = new Pessoa();
pessoa1.setNome('Maria Júlia');
pessoa1.setEmail('maju@email.com'); // Válido (.com)
instituicao.push({ tipo: 'Pessoa', objeto: pessoa1 });

const pessoa2 = new Pessoa();
pessoa2.setNome('Carlos Silva');
pessoa2.setEmail('carlos.invalido'); // INVÁLIDO (sem @ e sem final correto)
instituicao.push({ tipo: 'Pessoa', objeto: pessoa2 });

// ==========================================
// 3. CADASTRO DE ALUNOS
// ==========================================
const aluno1 = new Aluno();
aluno1.setNome('Bruno Silva');
aluno1.setEmail('bruno@escola.edu.br'); // Válido (.edu.br)
aluno1.setMatricula('202610'); // Válido (conforme sua biblioteca util.js)
instituicao.push({ tipo: 'Aluno', objeto: aluno1 });

const aluno2 = new Aluno();
aluno2.setNome('Giuliene Rocha');
aluno2.setEmail('giu@email.com'); // Válido (.com)
aluno2.setMatricula('00000'); // INVÁLIDO (matrícula errada)
instituicao.push({ tipo: 'Aluno', objeto: aluno2 });

// ==========================================
// 4. CADASTRO DE PROFESSORES
// ==========================================
const prof1 = new Professor();
prof1.setNome('Gustavo Santana');
prof1.setEmail('gustavo@professor.edu.br'); // Válido (termina em .edu.br)
prof1.setDisciplina('Banco de Dados SQL'); // Corrigido de setDiscipline para setDisciplina
instituicao.push({ tipo: 'Professor', objeto: prof1 });

const prof2 = new Professor();
prof2.setNome('Leandro Vaguetti');
prof2.setEmail('leandro@empresa.com'); // INVÁLIDO para professor (não é .edu.br)
prof2.setDisciplina('Programação Node.js'); // Corrigido de setDiscipline para setDisciplina
instituicao.push({ tipo: 'Professor', objeto: prof2 });

// ==========================================
// 5. EXIBIÇÃO DO RELATÓRIO FINAL
// ==========================================
console.log('==================================================');
console.log('                 RELATÓRIO FINAL                  ');
console.log('==================================================');

instituicao.forEach((cadastro, index) => {
  console.log(`\n[Cadastro #${index + 1}] Tipo: ${cadastro.tipo}`);
  console.log(`- Nome: ${cadastro.objeto.getNome() || 'Não cadastrado'}`);
  console.log(
    `- E-mail: ${
      cadastro.objeto.getEmail() || '❌ FALHA NA VALIDAÇÃO (E-mail Vazio ou Inválido)'
    }`
  );

  // Se for Aluno, mostra a matrícula
  if (cadastro.tipo === 'Aluno') {
    console.log(
      `- Matrícula: ${
        cadastro.objeto.getMatricula() ||
        '❌ FALHA NA VALIDAÇÃO (Matrícula Inválida)'
      }`
    );
  }

  // Se for Professor, mostra a disciplina
  if (cadastro.tipo === 'Professor') {
    console.log(
      `- Disciplina: ${cadastro.objeto.getDisciplina() || 'Não cadastrada'}`
    );
  }
});

console.log('\n==================================================');
