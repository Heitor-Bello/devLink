function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light') // essa função "toggle" faz a mesma coisa do código acima do if e else, de uma forma simplificada

  //pegar a tag img
  const img = document.querySelector('#profile img')

  //substituir a imagem
  //condição: si tiver light mode add a img se tiver darkmode mandter a imagem
  if (html.classList.contains('light')) {
    img.setAttribute(
      'src',
      './assets/avatar2.png'
    ) /*Modificar ou ajustar um atributo*/
  } else {
    img.setAttribute(
      'src', 
      './assets/avatar.png')
  }
}
