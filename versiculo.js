const versiculos = [
  'Salmos 23:1 - O Senhor é o meu pastor; nada me faltará.',
  'Filipenses 4:13 - Posso todas as coisas naquele que me fortalece.',
  'João 3:16 - Porque Deus amou o mundo de tal maneira...',
  'Isaías 41:10 - Não temas, porque eu sou contigo...',
]

const versiculoTexto = document.getElementById('versiculo-texto')
const aleatorio = Math.floor(Math.random() * versiculos.length)
versiculoTexto.textContent = versiculos[aleatorio]
