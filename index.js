function handleTabClick(e, tab) {
  e.preventDefault();

  // Element of tab that was clicked
  const tabLink = document.querySelector(`#${tab}-tab-link`);
  // Tab-content of tab that was clicked
  const tabContent = document.querySelector(`#${tab}-content`);

  // Make all tabs inactive
  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Hide all tab content
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((tab) => {
    tab.style.display = "none";
  });

  // Add active to correct tab's class and unhide that tabs content
  tabLink.classList.toggle("active");
  tabContent.style.display = "block";
}
