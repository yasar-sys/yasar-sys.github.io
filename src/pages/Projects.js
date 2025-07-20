import React from "react";

const projects = [
  {
    id: 1,
    name: "Kothon",
    description:
      "An anonymous messaging app built with Flutter & Firebase featuring voice messages and shareable links.",
    link: "https://github.com/yasar-sys/kothon",
  },
  {
    id: 2,
    name: "Born To Do",
    description:
      "Offline To-Do list app with task categories, notifications, and dark mode.",
    link: "https://github.com/yasar-sys/born-to-do",
  },
];

export default function Projects() {
  return (
    <main className="container">
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          style={{
            animation: "fadeIn 0.8s ease forwards",
            animationDelay: `${project.id * 0.2}s`,
            opacity: 0,
          }}
        >
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </main>
  );
}
