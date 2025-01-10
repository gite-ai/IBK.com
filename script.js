function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}
