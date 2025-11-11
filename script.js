"use strict";

const projects = [
  {
    name: "Cyrillic Manager",
    description: "Glyph curation and transliteration tools for Slavic type projects.",
    url: "https://cyrillic.tetsuro.ch"
  },
  {
    name: "Recipe DB",
    description: "Structured cooking archive with search, tags, and seasonal notes.",
    url: "https://cooking.tetsuro.ch"
  },
  {
    name: "Pathfinder Digital Character Sheet",
    description: "PF2e-focused sheet with automation for rolls, inventory, and spells.",
    url: "https://pf2e.tetsuro.ch"
  }
];

// Populate the project tiles so adding work only requires editing this data structure.
const gridElement = document.querySelector(".projects-grid");

if (gridElement) {
  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const link = document.createElement("a");
    link.className = "project-card";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer"; // Prevent tab-nabbing when opening new tabs.
    link.setAttribute("aria-label", `${project.name} - ${project.description}`);

    const title = document.createElement("h2");
    title.className = "project-name";
    title.textContent = project.name;

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = project.description;

    link.append(title, description);
    fragment.appendChild(link);
  });

  gridElement.appendChild(fragment);
}