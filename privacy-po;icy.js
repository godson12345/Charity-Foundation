const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav__toggle'),
      closeMenu = document.getElementById('nav-close')

      toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
      })
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
      })