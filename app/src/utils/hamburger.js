export default function handleHam() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  
  if(width > 900) return null
  
  const $hamburger = document.querySelector('.hamburger')
  const $menu = document.querySelector('.menu')
  
  $hamburger.classList.toggle('is-active')
  $menu.classList.toggle('active-menu')
}
