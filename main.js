//DOM - Document Object Model
// document.body.style.background = '#6b5b95'

/*Abrir e fechar o menu  quando clicar nos ícones hambúrger e X repectivamente.*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar em algum item de menu remover a classe "show" da tag nav.*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
