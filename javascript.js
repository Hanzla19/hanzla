document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Resume download functionality
    document.querySelector('.button .butn:first-child').addEventListener('click', function () {
        const resumeUrl = 'resume.pdf'; // Change this to your actual resume file path
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Muhammad_Hanzla_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Open LinkedIn profile
    document.querySelector('.button .butn:last-child').addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/yourprofile', '_blank'); // Replace with actual LinkedIn profile link
    });
});
