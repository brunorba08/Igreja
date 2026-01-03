const versiculos = [
  'Salmos 23:1 - O Senhor é o meu pastor; nada me faltará.',
  'Filipenses 4:13 - Posso todas as coisas naquele que me fortalece.',
  'João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.',
  'Isaías 41:10 - Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.',
  'Provérbios 3:5-6 - Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.',
  'Mateus 11:28 - Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.',
  'Romanos 8:28 - E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.',
  'Jeremias 29:11 - Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.',
  'Salmos 46:1 - Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.',
  'João 14:6 - Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.',
  '1 Coríntios 13:13 - Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.',
  'Salmos 37:4 - Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.',
]

const versiculoTexto = document.getElementById('versiculo-texto')
if (versiculoTexto) {
  const aleatorio = Math.floor(Math.random() * versiculos.length)
  versiculoTexto.textContent = versiculos[aleatorio]
}
