/**************************************************************************
 * index.js
 *
 * To do:
 * Fix pathing? issue on embedded files
 * Hide toolbar button
 * Better CSS
 *
 **************************************************************************/

function handleTabClick(e, tab) {
  e.preventDefault();

  // Element of tab that was clicked
  const tabButton = document.querySelector(`#${tab}-tab-button`);
  // Tab-content of tab that was clicked
  const tabContent = document.querySelector(`#${tab}-content`);

  // Make all tabs inactive
  const tabs = document.querySelectorAll(".tab-button");
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  // Hide all tab content
  const tabContents = document.querySelectorAll(".tab-content");

  tabContents.forEach(tab => {
    tab.style.display = "none";
  });

  // Add active to correct tab's class and unhide that tab's content
  tabButton.classList.toggle("active");
  tabContent.style.display = "block";

  // If user clicked on 'cert' tab, trigger animation for both sub buttons
  if (tab === "cert") {
    const subButtons = document.querySelectorAll(".sub-button");
    subButtons.forEach(button => {
      button.classList.add("animate");
    });
  }
}

function handleSubClick(e, button) {
  e.preventDefault();

  // Hide all links
  // const certLinks = document.querySelector("#cert-links").querySelectorAll("a");
  // certLinks.forEach(link => {
  //   link.style.display = "none";
  // });

  // Display link for button pressed
  console.log(button);
  console.log(document.querySelector(`#${button}-link`));

  document.querySelector(`#${button}-link`).style.display = "block";
}

function handleLinkClick(e, link) {
  e.preventDefault();

  console.log(link);
}

// function handleSubClick(e, button) {
//   e.preventDefault();

//   // Hide both certifications and certificates
//   const subDivs = document.querySelectorAll("#sub-content");
//   subDivs.forEach(div => {
//     div.style.display = "none";
//   });

//   // Display div for button pressed
//   document.querySelector(`.${button}`).style.display = "block";
// }
