const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav__toggle'),
      closeMenu = document.getElementById('nav-close')

      toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
      })
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
      })

      // Dummy data for projects (you can replace this with actual data fetched from a server)
const projects = [
  { title: "Scholarship Programs", description: "Giving children scholarship further their education." },
  { title: "Praise God", description: "we were able to assist our six years old boy praiseGod." },
  { title: "Accomodation", description: "we also acquired an office space for in nigeria." }
];

// Function to display projects on the page
function displayProjects() {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    projectElement.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <button>Learn More</button>
    `;

    projectsContainer.appendChild(projectElement);
  });
}

// Display projects when the page loads
document.addEventListener("DOMContentLoaded", displayProjects);
