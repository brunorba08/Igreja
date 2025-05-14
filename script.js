fetch('header.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('header-placeholder').innerHTML = data
  })

fetch('footer.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('footer-placeholder').innerHTML = data
  })
const traducoes = {
  'Easter Sunday': 'Domingo de Páscoa',
  'Palm Sunday': 'Domingo de Ramos',
  'Monday of Holy Week': 'Segunda-feira da Semana Santa',
  'Tuesday of Holy Week': 'Terça-feira da Semana Santa',
  'Wednesday of Holy Week': 'Quarta-feira da Semana Santa',
  'Holy Thursday': 'Quinta-feira Santa',
  'Good Friday': 'Sexta-feira Santa',
  'Holy Saturday': 'Sábado Santo',
  'Ash Wednesday': 'Quarta-feira de Cinzas',
  'Immaculate Conception': 'Imaculada Conceição',
  Christmas: 'Natal',
  'Annunciation of the Lord': 'Anunciação do Senhor',
  'Saint Joseph, Spouse of the Blessed Virgin Mary':
    'São José, esposo da Virgem Maria',
  'Ordinary Time': 'Tempo Comum',
  'Lenten Weekday': 'Dia da Quaresma',
  'Advent Weekday': 'Dia do Advento',
}

// Datas e nomes dos dias santos
const diasSantos = {
  '2024-02-12': 'Carnaval',
  '2024-02-13': 'Carnaval',
  '2024-02-14': 'Quarta-feira de Cinzas',
  '2024-03-29': 'Sexta-feira Santa',
  '2024-05-30': 'Corpus Christi',
  '2024-06-13': 'Santo Antônio',
  '2024-06-24': 'Natividade de São João Batista',
  '2024-12-25': 'Natal',
  '2025-03-03': 'Carnaval',
  '2025-03-04': 'Carnaval',
  '2025-03-05': 'Quarta-feira de Cinzas',
  '2025-04-18': 'Sexta-feira Santa',
  '2025-06-19': 'Corpus Christi',
  '2025-06-13': 'Santo Antônio',
  '2025-06-24': 'Natividade de São João Batista',
  '2025-12-25': 'Natal',
  '2026-02-16': 'Carnaval',
  '2026-02-17': 'Carnaval',
  '2026-02-18': 'Quarta-feira de Cinzas',
  '2026-04-03': 'Sexta-feira Santa',
  '2026-06-04': 'Corpus Christi',
  '2026-06-13': 'Santo Antônio',
  '2026-06-24': 'Natividade de São João Batista',
  '2026-12-25': 'Natal',
  '2027-02-08': 'Carnaval',
  '2027-02-09': 'Carnaval',
  '2027-02-10': 'Quarta-feira de Cinzas',
  '2027-03-26': 'Sexta-feira Santa',
  '2027-05-27': 'Corpus Christi',
  '2027-06-13': 'Santo Antônio',
  '2027-06-24': 'Natividade de São João Batista',
  '2027-12-25': 'Natal',
  '2028-02-28': 'Carnaval',
  '2028-02-29': 'Carnaval',
  '2028-03-01': 'Quarta-feira de Cinzas',
  '2028-04-14': 'Sexta-feira Santa',
  '2028-06-15': 'Corpus Christi',
  '2028-06-13': 'Santo Antônio',
  '2028-06-24': 'Natividade de São João Batista',
  '2028-12-25': 'Natal',
  '2024-07-26': 'Santo Joaquim e Santa Ana', // Data de Santo Joaquim e Santa Ana
  '2025-07-26': 'Santo Joaquim e Santa Ana',
  '2026-07-26': 'Santo Joaquim e Santa Ana',
  '2027-07-26': 'Santo Joaquim e Santa Ana',
  '2028-07-26': 'Santo Joaquim e Santa Ana',
  '2024-10-04': 'São Francisco de Assis', // Data de São Francisco de Assis
  '2025-10-04': 'São Francisco de Assis',
  '2026-10-04': 'São Francisco de Assis',
  '2027-10-04': 'São Francisco de Assis',
  '2028-10-04': 'São Francisco de Assis',
  '2024-11-01': 'Todos os Santos', // Dia de Todos os Santos
  '2025-11-01': 'Todos os Santos',
  '2026-11-01': 'Todos os Santos',
  '2027-11-01': 'Todos os Santos',
  '2028-11-01': 'Todos os Santos',
  '2024-08-15': 'Assunção de Maria', // Dia da Assunção de Maria
  '2025-08-15': 'Assunção de Maria',
  '2026-08-15': 'Assunção de Maria',
  '2027-08-15': 'Assunção de Maria',
  '2028-08-15': 'Assunção de Maria',
}

let mesAtual = new Date().getMonth()
let anoAtual = new Date().getFullYear()

function gerarCalendario(mes, ano) {
  const calendarioDiv = document.getElementById('calendar')
  const mesAnoDiv = document.getElementById('monthYear')
  calendarioDiv.innerHTML = ''

  const primeiroDia = new Date(ano, mes, 1)
  const ultimoDia = new Date(ano, mes + 1, 0)
  const totalDias = ultimoDia.getDate()

  mesAnoDiv.innerHTML = `${getNomeMes(mes)} ${ano}`

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  diasDaSemana.forEach((dia) => {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = dia
    calendarioDiv.appendChild(header)
  })

  const primeiroDiaSemana = primeiroDia.getDay()
  for (let i = 0; i < primeiroDiaSemana; i++) {
    const vazio = document.createElement('div')
    vazio.classList.add('day')
    calendarioDiv.appendChild(vazio)
  }

  for (let i = 1; i <= totalDias; i++) {
    const data = new Date(ano, mes, i)
    const diaFormatado = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(
      i
    ).padStart(2, '0')}`
    const diaDiv = document.createElement('div')
    diaDiv.classList.add('day')

    // Verifica se a data tem um feriado
    if (diasSantos[diaFormatado]) {
      let nomeFeriado = diasSantos[diaFormatado]
      // Verifica se existe uma tradução para o feriado
      if (traducoes[nomeFeriado]) {
        nomeFeriado = traducoes[nomeFeriado]
      }

      diaDiv.classList.add('day', 'holiday')
      diaDiv.innerHTML = `
          <span class="day-number">${i}</span>
          <small>${nomeFeriado}</small>
        `
    } else {
      diaDiv.classList.add('day')
      diaDiv.innerHTML = `<span class="day-number">${i}</span>`
    }

    calendarioDiv.appendChild(diaDiv)
  }
}

function getNomeMes(mes) {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  return meses[mes]
}

document.getElementById('prevMonth').addEventListener('click', () => {
  if (mesAtual === 0) {
    mesAtual = 11
    anoAtual -= 1
  } else {
    mesAtual -= 1
  }
  gerarCalendario(mesAtual, anoAtual)
})

document.getElementById('nextMonth').addEventListener('click', () => {
  if (mesAtual === 11) {
    mesAtual = 0
    anoAtual += 1
  } else {
    mesAtual += 1
  }
  gerarCalendario(mesAtual, anoAtual)
})

gerarCalendario(mesAtual, anoAtual)
