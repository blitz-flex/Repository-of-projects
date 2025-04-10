// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlRoot = document.getElementById('htmlRoot');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlRoot.classList.add('dark');
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    htmlRoot.classList.toggle('dark');
    localStorage.setItem('theme', htmlRoot.classList.contains('dark') ? 'dark' : 'light');
});

// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const closeMenuBtn = document.getElementById('closeMenuBtn');

// Toggle mobile menu
function toggleMobileMenu() {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMobileMenu);
closeMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('active') && 
        !mobileNav.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});