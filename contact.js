const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav__toggle'),
      closeMenu = document.getElementById('nav-close')

      toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
      })
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
      })
      
function emailSend(){
  
  Email.send({
    Host : "smtp.gmail.com",
    Username : "oforibikag@gmail.com",
    Password : "godson500",
    To : 'oforibikarebecca@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
)
}


window.addEventListener("load", function () {
  var loaderWrapper = document.querySelector(".wrapper");
  if (loaderWrapper) {
      loaderWrapper.style.transiton = "opacity 0.5s ease";
      loaderWrapper.style.opacity = "0";
      setTimeout(function(){
        loaderWrapper.style.display = "none"
      }, 500);
  }
});
