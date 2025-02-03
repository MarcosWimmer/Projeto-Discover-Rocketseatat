function toggleMode() {
 
 const html = document.documentElement
 html.classList.toggle("light")

 const img = document.querySelector("#profile img")
 if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatarmarcos2.png")
 } else {
    img.setAttribute("src", "./assets/assets/avatarmarcos.png")
 }
   
 const alt = document.querySelector("#profile img")
 if (html.classList.contains("light")) {
    alt.setAttribute("alt", "Foto de perfil Marcos Wimmer, fundo desfocado em roxo.")
 } else {
    alt.setAttribute("alt", "Foto de perfil Marcos Wimmer, fundo desfocado em cinza.")
 }
 } 



