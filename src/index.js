import "./styles.css"

function revealSection() {
    const projectCards = document.querySelectorAll(".project-card");
    const footer = document.getElementById("contact-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        })
    }, {threshold: 0.75})

    projectCards.forEach((card) => {
        observer.observe(card);
    })

    observer.observe(footer);
}

revealSection();