// Data for your portfolio sections
const skills = [
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "C", icon: "fas fa-c" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Python", icon: "fab fa-python" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" }
];

const projects = [
    {
        title: "Online Examination System",
        description: "A full-stack web application for creating and scheduling online tests, complete with student logins, timers, auto-scoring, and an admin dashboard.",
        github: "#", // Replace with actual GitHub link
        live: "#" // Replace with live demo link if available
    },
    {
        title: "Online Code Editor",
        description: "A browser-based editor that allows users to write and execute code online without local installations, with a secure backend for code execution.",
        github: "#",
        live: "#"
    },
    {
        title: "Tulu Language LLM (Ongoing)",
        description: "An ongoing project to train a custom language model for the Tulu language using a custom dataset and tokens.",
        github: "#",
        live: "#"
    },
];

const certificates = [
    {
        title: "Full Stack Web Development Bootcamp",
        organization: "Angela-Code Brewary",
        link: "#" // Replace with actual certificate link if available
    },
    {
        title: "C Programming & Data Structures",
        organization: "CodeChef",
        link: "#"
    },
    {
        title: "Postman API Fundamentals",
        organization: "Postman",
        link: "#"
    },
    {
        title: "Web Development Workshops",
        organization: "SMVITM / IEEE",
        link: "#"
    }
];


// Function to dynamically create HTML elements
const createSkills = () => {
    const skillsCarousel = document.querySelector('.skills-carousel');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
        skillsCarousel.appendChild(skillItem);
    });
};

const createProjects = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card', 'project-card');
        projectCard.innerHTML = `
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">GitHub <i class="fab fa-github"></i></a>
                    <a href="${project.live}" target="_blank">Live Demo <i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
};

const createCertificates = () => {
    const certificatesGrid = document.querySelector('.certificates-grid');
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.classList.add('card', 'certificate-card');
        certCard.innerHTML = `
            <h3>${cert.title}</h3>
            <p>From: ${cert.organization}</p>
            <a href="${cert.link}" target="_blank">View Certificate <i class="fas fa-external-link-alt"></i></a>
        `;
        certificatesGrid.appendChild(certCard);
    });
};

// Function to handle scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});


// Call the functions to generate content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createSkills();
    createProjects();
    createCertificates();
});