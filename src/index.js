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
  const certDivs = document.querySelectorAll(".links");
  certDivs.forEach(link => {
    link.style.display = "none";
  });

  // Display links for button pressed
  document.querySelector(`#${button}-links`).style.display = "block";

  // Toggle active on all sub buttons
  const subButtons = document.querySelectorAll(".sub-button");
  subButtons.forEach(subButton => {
    subButton.classList.remove("active");
  });
  document.querySelector(`#${button}-button`).classList.add("active");
}

function handleLinkClick(path) {
  //
  document.querySelector(`.${path}`).style.display = "block";
}
