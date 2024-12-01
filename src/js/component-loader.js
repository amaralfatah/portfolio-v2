// src/js/utils/component-loader.js

class ComponentLoader {
  static async loadComponent(elementId, componentPath) {
    try {
      const response = await fetch(componentPath);
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;

      // Handle active state for navigation after component is loaded
      if (
        elementId === "footer-container" ||
        elementId === "header-container"
      ) {
        this.setActiveNavigation();
      }
    } catch (error) {
      console.error("Error loading component:", error);
    }
  }

  static setActiveNavigation() {
    // Get current page from pathname
    const currentPath = window.location.pathname;
    const pageName = currentPath.split("/").pop() || "index.html";

    // Select navigation links from both header and footer
    const navLinks = document.querySelectorAll("#nav-menu a, footer nav a");

    navLinks.forEach((link) => {
      // Remove all active classes first
      link.classList.remove("active");
      link.className = link.className.replace(
        "text-[#48CAE4]",
        "text-gray-300"
      );

      // Get the href and extract just the filename
      const linkPath = link.getAttribute("href");
      const linkPage = linkPath.split("/").pop();

      // Compare current page with link's target page, handling home page special case
      if (
        pageName === linkPage ||
        (pageName === "index.html" &&
          (linkPath === "/" || linkPath === "index.html"))
      ) {
        link.classList.add("active");
        // Update text color for active state
        link.className = link.className.replace(
          "text-gray-300",
          "text-[#48CAE4]"
        );
      }
    });
  }
}

// Initialize components
document.addEventListener("DOMContentLoaded", async () => {
  await ComponentLoader.loadComponent(
    "header-container",
    "../../src/components/header.html"
  );
  await ComponentLoader.loadComponent(
    "footer-container",
    "../../src/components/footer.html"
  );
});