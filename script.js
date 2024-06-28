function toggleMode() {
  const html = document.documentElement
  // trocar modo claro/escuro
  html.classList.toggle('light')

  // atribuir tag img
  const img = document.querySelector('#profile img')
  // substituir img
  if(html.classList.contains('light')) {
    // com light mode on, adicionar img light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // com light mode of, manter img padrão
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}

