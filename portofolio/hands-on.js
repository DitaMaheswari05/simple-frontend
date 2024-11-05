// Fungsi untuk menambahkan animasi pada teks ketika halaman dimuat
window.addEventListener('load', function() {
    const homeContent = document.querySelector('.home-content');
    homeContent.style.opacity = '0';
    homeContent.style.transform = 'translateY(50px)';
    setTimeout(() => {
        homeContent.style.transition = 'opacity 1s ease, transform 1s ease';
        homeContent.style.opacity = '1';
        homeContent.style.transform = 'translateY(0)';
    }, 100);
});

// Fungsi untuk menambahkan efek hover pada logo sosial media
const socialIcons = document.querySelectorAll('.home-sci a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseout', function() {
        icon.style.transform = 'scale(1)';
    });
});

// Fungsi untuk menambahkan smooth scroll saat mengklik navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Fungsi untuk membuat efek sticky pada navbar saat halaman di-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
