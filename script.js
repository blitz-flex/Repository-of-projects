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

// Updated to use pointerdown for better mobile optimization
menuBtn.addEventListener('pointerdown', toggleMobileMenu);
closeMenuBtn.addEventListener('pointerdown', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('pointerdown', (e) => {
    if (mobileNav.classList.contains('active') && 
        !mobileNav.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('pointerdown', toggleMobileMenu);
});

// Add ScrollReveal animation logic
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: true,
});

// Apply ScrollReveal to elements with data-sr attribute
document.querySelectorAll('[data-sr]').forEach((el) => {
  sr.reveal(el);
});