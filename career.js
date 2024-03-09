// Dummy data for positions (you can replace this with actual data fetched from a server)
const positions = [
    { title: "Marketing Coordinator", location: "New York, NY", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec vestibulum urna." },
    { title: "Fundraising Manager", location: "Los Angeles, CA", description: "Sed non nisi vel mauris volutpat luctus. Integer at velit in leo tincidunt bibendum." },
    { title: "Volunteer Coordinator", location: "Chicago, IL", description: "Pellentesque vitae interdum mi. Nullam mattis velit ac mauris vestibulum, at hendrerit elit sagittis." }
  ];
  
  // Function to display positions on the page
  function displayPositions() {
    const positionsContainer = document.getElementById("positions");
    positionsContainer.innerHTML = "";
  
    positions.forEach(position => {
      const positionElement = document.createElement("div");
      positionElement.classList.add("position");
  
      positionElement.innerHTML = `
        <h3>${position.title}</h3>
        <p><strong>Location:</strong> ${position.location}</p>
        <p>${position.description}</p>
        <a href="#" class="apply-button">Apply Now</a>
      `;
  
      positionsContainer.appendChild(positionElement);
    });
  }
  
  // Display positions when the page loads
  document.addEventListener("DOMContentLoaded", displayPositions);
  