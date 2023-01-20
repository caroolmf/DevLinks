function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem avatar light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Caroline Moreira agora com roupa azul")
  } else {
    //se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Caroline Moreira sorrindo com batom vermelho e cabelos longos pretos."
    )
  }
}
