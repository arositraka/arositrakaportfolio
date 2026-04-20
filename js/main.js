// ==================== CHARGEMENT DES FICHIERS HTML ====================
// Cette fonction charge les fichiers HTML dans les conteneurs

async function loadHTMLContent() {
    try {
        // Charger la navbar
        const navResponse = await fetch('includes/navbar.html');
        const navContent = await navResponse.text();
        document.getElementById('navbar-container').innerHTML = navContent;

        // Charger Hero
        const heroResponse = await fetch('includes/hero.html');
        const heroContent = await heroResponse.text();
        document.getElementById('hero-container').innerHTML = heroContent;

        // Charger About
        const aboutResponse = await fetch('includes/about.html');
        const aboutContent = await aboutResponse.text();
        document.getElementById('about-container').innerHTML = aboutContent;

        // Charger Skills
        const skillsResponse = await fetch('includes/skills.html');
        const skillsContent = await skillsResponse.text();
        document.getElementById('skills-container').innerHTML = skillsContent;

        // Charger Projects
        const projectsResponse = await fetch('includes/projects.html');
        const projectsContent = await projectsResponse.text();
        document.getElementById('projects-container').innerHTML = projectsContent;

        // Charger Contact
        const contactResponse = await fetch('includes/contact.html');
        const contactContent = await contactResponse.text();
        document.getElementById('contact-container').innerHTML = contactContent;

        // Charger Footer
        const footerResponse = await fetch('includes/footer.html');
        const footerContent = await footerResponse.text();
        document.getElementById('footer-container').innerHTML = footerContent;

        // Après avoir chargé tous les fichiers, initialiser les scripts
        initializeScripts();

    } catch (error) {
        console.error('Erreur lors du chargement des fichiers:', error);
    }
}

// ==================== INITIALISATION DES SCRIPTS ====================
function initializeScripts() {
    // Charger les scripts
    loadScript('js/navbar.js');
    loadScript('js/animations.js');
    loadScript('js/form.js');
}

// ==================== FONCTION POUR CHARGER LES SCRIPTS ====================
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

// ==================== AU CHARGEMENT DE LA PAGE ====================
document.addEventListener('DOMContentLoaded', loadHTMLContent);