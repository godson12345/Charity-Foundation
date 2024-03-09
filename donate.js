document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    
    // Here, you can send this data to your server or perform other actions, like displaying a thank you message.
    // For demonstration purposes, let's just log the data to the console.
    console.log("Donation Details:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Amount: $" + amount);
    
    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("amount").value = "";
  });

  const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav__toggle'),
      closeMenu = document.getElementById('nav-close')

      toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
      })
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
      })