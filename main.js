const SCROLL_TO_TOP_OFFSET = 560

/* Abre e fecha o menu ao clicar no ícone (hambúrguer e X) */
const header = document.querySelector('#header')
const nav = document.querySelector('#header nav')
const toggleButtons = document.querySelectorAll('nav .toggle')

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => nav.classList.toggle('show'))
})

/* Ao clicar em um item do menu, esconde o menu */
const menuLinks = document.querySelectorAll('nav ul li a')

menuLinks.forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('show'))
})

/* Muda o header quando a página recebe scroll além da sua altura */
const headerHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  header.classList.toggle('scroll', window.scrollY >= headerHeight)
}

/* ScrollReveal: mostra os elementos quando entram na tela */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)

/* Botão de voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top')

function toggleBackToTopButton() {
  backToTopButton.classList.toggle('show', window.scrollY >= SCROLL_TO_TOP_OFFSET)
}

/* Destaca no menu a seção que está visível na tela */
const sectionLinks = [...document.querySelectorAll('main section[id]')]
  .map((section) => ({
    section,
    link: document.querySelector(`nav ul li a[href*="${section.id}"]`),
  }))
  .filter(({ link }) => link !== null)

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  sectionLinks.forEach(({ section, link }) => {
    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight
    const isVisible = checkpoint >= sectionTop && checkpoint <= sectionBottom

    link.classList.toggle('active', isVisible)
  })
}

/* Ao rolar a página, atualiza header, botão e menu */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  toggleBackToTopButton()
  activateMenuAtCurrentSection()
})
