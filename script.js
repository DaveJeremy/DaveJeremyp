const buttons = document.querySelectorAll('.tab-button');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        buttons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to the clicked button and corresponding section
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});