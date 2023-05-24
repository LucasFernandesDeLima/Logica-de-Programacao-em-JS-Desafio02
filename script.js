// Dados de entrada do usuário
// name
// fistNote
// secondNote

// Variaveis da aplicação
// alunos (Array{})
// name (proprety)
// fistNote (proprety)
// secondNote (proprety)
// average (number)

// Tratamento de dados ou estrutura de dados
// Função average (){}
// if()

// alert() para exibir uma menssagem com a situação e a média do aluno:

// aprovado
// `A média do(a) aluno(a) ${name} é: ${average}
// Parabéns ${name}, você foi aprovado(a) no concurso!`

// reprovado:
// `A média do(a) aluno(a) ${name} é: ${average}
//Não foi dessa vez, ${name}! tente novamente!`

let students = [
  {
    name: 'Lucas Fernandes de Lima',
    fistNote: 7,
    secondNote: 10
  },
  {
    name: 'Juliana Gonsalves',
    fistNote: 6,
    secondNote: 7
  },
  {
    name: 'Aline Pereira de Mello',
    fistNote: 5,
    secondNote: 5
  },
  {
    name: 'Ingrid Firmino da Silva',
    fistNote: 10,
    secondNote: 10
  }
]

let averageOfStudent

for (const student of students) {
  averageOfStudent = getAverage(student.fistNote, student.secondNote)

  const approvedStudent = 7 >= averageOfStudent
  if (approvedStudent) {
    //Imprimir Menssagem de parabenização
    printMsgCongratulating(averageOfStudent, student.name)
  } else {
    // Imprimir Menssagem de incentivo
    printMsgEncouraging(averageOfStudent, student.name)
  }
}

function getAverage(fistNote, secondNote) {
  const average = (fistNote + secondNote) / 2
  return average.toFixed(2)
}

function printMsgCongratulating(averageStudent, nameStudent) {
  const congratulationMessage = `
  A média do(a) aluno(a) ${nameStudent} é: ${averageStudent}
  Parabéns ${nameStudent}, você foi aprovado(a) no concurso!`
  alert(congratulationMessage)
}

function printMsgEncouraging(averageStudent, nameStudent) {
  const encouragementMessage = `
  A média do(a) aluno(a) ${nameStudent} é: ${averageStudent}
  Não foi dessa vez, ${nameStudent}! tente novamente!`
  alert(encouragementMessage)
}
