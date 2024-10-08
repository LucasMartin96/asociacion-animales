document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'header-component', file: '../components/navbar-component.html' },
        { id: 'hero-component', file: '../components/hero-component.html' },
        { id: 'featured-animals-component', file: '../components/featured-animals-component.html' },
        { id: 'impact-component', file: '../components/impact-component.html' },
        { id: 'how-to-help-component', file: '../components/how-to-help-component.html' },
        { id: 'success-stories-component', file: '../components/success-stories-component.html' },
        { id: 'footer-component', file: '../components/footer-component.html' }
    ];

    components.forEach(component => {
        fetch(component.file)
            .then(response => response.text())
            .then(html => {
                document.getElementById(component.id).innerHTML = html;
            })
            .catch(error => console.error(`Error loading ${component.file}:`, error));
    });
});
