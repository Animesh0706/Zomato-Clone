document.addEventListener("DOMContentLoaded", () => {
    // Smooth hover effect for header links
    const headerLinks = document.querySelectorAll('header ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'transform 0.3s ease';
            link.style.transform = 'scale(1.1)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Input placeholder animation
    const searchInput = document.querySelector('main section input');
    searchInput.addEventListener('focus', () => {
        searchInput.placeholder = "Start typing...";
        searchInput.style.transition = "background-color 0.3s ease";
        searchInput.style.backgroundColor = "#ffe0e0";
    });

    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = "Search for restaurant, cuisine or a dish";
        searchInput.style.backgroundColor = "#fff";
    });

    // Header logo animation on hover
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', () => {
        logo.style.transition = 'transform 0.5s ease';
        logo.style.transform = 'rotate(360deg)';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'rotate(0deg)';
    });
});
